// https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a
//1. install dependencies
/*
npm install -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
*/

//2. add test script to package.json file
/*
{
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview",
        "test": "vitest"
    }
}
*/

//3- test setup dosyasını oluştur. Proje klasöründe ./tests/setup.js
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

//4-vite.config.js dosyasına test ayarlarını ekle
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //aşağıdakileri ekliyoruz
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
  },
});

//5. test dosyası oluştur:
/*
Dikkat:
1- adında .test veta .spec olmalı veya __tests__ klasöründe olmalı.
2- uzantısı .jsx olacak.
3- testleri yazarken main.jsx'de App'i sarmaladığımız Provider'lar ile sarmalamayı unutma.

Örn: App.test.jsx
*/

import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";
import Feed from "../pages/Feed.jsx";

import RightSideBar from "../layouts/RightSideBar.jsx";

const queryClient = new QueryClient();

describe("Login Form", () => {
  it("renders the App component", () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    //screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("renders rightsideBar", () => {
    render(<RightSideBar />);
  });

  it("opens feed page after successful login", async () => {
    //Arrange
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </Provider>
        </QueryClientProvider>
      </BrowserRouter>
    );

    //act
    const user = userEvent.setup();
    const email = screen.getByTestId("login-form-email");
    await user.type(email, "emre@wit.com.tr");

    const pass = screen.getByPlaceholderText(
      "Password'unuzu adresinizi giriniz"
    );

    await user.type(pass, "1234TbU1");

    const button = screen.getByText("Log In");
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    //

    const heading = await screen.findByTestId("head");
    expect(heading).toHaveTextContent("Home");

    //screen.debug();
  });

  it("renders Feed Page", () => {
    render(
      //wrap only by necessary providers
      <QueryClientProvider client={queryClient}>
        <Feed user={{ email: "emre@wit.com.tr" }} />
      </QueryClientProvider>
    );
  });
});
