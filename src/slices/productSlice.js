// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const productApi = createApi({
//     reducerPath: 'ProductApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
//     tagTypes: ['Product'],
//     endpoints: (builder) => ({
//         getProducts: builder.query({
//             query: () => '/products',
//             providesTags: ['Product'],
//         }),
//         getProductsByCategory: builder.query({
//             query: (category) => `/products/category/${category}`,
//             providesTags: ['Product'],
//         }),
//     }),
// });

// // Export hooks
// export const { useGetProductsQuery, useGetProductsByCategoryQuery } = productApi;

// export default productApi;










import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
  reducerPath: 'ProductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
      providesTags: ['Product'],
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
      providesTags: ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`, // Endpoint to fetch product by ID
      providesTags: ['Product'],
    }),
  }),
});

// Export hooks
export const { useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery } = productApi;

export default productApi;
