//1. install
//npm i @tanstack/react-query @tanstack/react-query-devtools

//2. main.jsx'de queryClient instance'ı oluştur
const queryClient = new QueryClient();

//3. main JSX'de uygulamayı queryClientProvider ile sarmala
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;

//4. ReactQueryDevTools'u ekle
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={true} />
</QueryClientProvider>;

//5. folder yapısını hazırla
//./services/api.js
//./services/queries.js
//./services/mutations.js

//6. api isteklerini api.js dosyasına yaz.
import axios from "axios";

export const getUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

export const createUser = (newUser) => {
  return axios.post("https://reqres.in/api/users", newUser);
};

//7. useQuery ile query oluştur.
//./services/queries.js
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 10000,
  });
};

//8. query'i gerekli yerde kullan
import { useUsers } from "./services/queries";

function App() {
  const { isPending, isError, data: response, error } = useUsers();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {response.data.data.map((user) => {
        return <li key={user.id}>{user.first_name + " " + user.last_name} </li>;
      })}
    </ul>
  );
}

export default App;

//9. useMutations ile mutation oluştur.

import { createUser } from "./api";

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUser = () => {
  //10. Provider'daki queryClient'a eriş
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      //11. onSuccess'de ilgili query'leri invalide et.
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

//12. mutation'ı kullan
import { useCreateUser } from "../services/mutations";

function AddNew() {
  const mutation = useCreateUser();

  return (
    <div>
      {mutation.isPending ? (
        "Adding user..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>User added!</div> : null}

          <button
            onClick={() => {
              mutation.mutate({
                first_name: "Emre",
                last_name: "Şahiner",
                email: "emre@wit.com.tr",
              });
            }}
          >
            Add New User
          </button>
        </>
      )}
    </div>
  );
}
