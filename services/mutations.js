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
