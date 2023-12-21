import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils";
// import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
//   prepareHeaders: (headers, { getState }) => {
//     const state = getState() as RootState
//     const token = state.auth.token;

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Admin", "Products"],
  endpoints: () => ({}),
});
