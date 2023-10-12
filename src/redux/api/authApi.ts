import { baseApi } from "./baseApi"

// http://localhost:3030/api/v1/auth/login

const AUTH_URL = "/auth"
export  const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url:`${AUTH_URL}/login`,
                method:'POST',
                data: loginData,
            }),
            invalidatesTags:['user']
        }),
    }),
})

export const { useUserLoginMutation } = authApi