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

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
