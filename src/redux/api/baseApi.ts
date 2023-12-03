import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { getBaseUrl } from '@/helpers/config/envConfig'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'

// Define a service using a base URL and expected endpoints
//here we use custom axios
export const baseApi = createApi({
  reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl:getBaseUrl() }),
  baseQuery: axiosBaseQuery({ baseUrl:getBaseUrl() }),
  endpoints: (builder) => ({}),
  //for caching data
  tagTypes:tagTypesList

})

