import { apiSlice } from "./api";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
        providesTags: ["Products"],
        keepUnusedDataFor: 5
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      //   providesTags: ["Mandala"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice;
