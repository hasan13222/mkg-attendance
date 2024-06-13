import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({
                url: '/users'
            }),
            providesTags: ['posts'],
            transformResponse: (response) => {
                return response;
            }
        })
    })
})

export const {useGetAllPostsQuery} = postApi;