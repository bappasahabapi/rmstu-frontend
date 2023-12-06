// http://localhost:3030/api/v1/management-departments
import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

const DEPARTMENT_URL = "/management-departments";

export  const departmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        departments: build.query({
            query: (arg: Record<string, any>) => ({
                url: DEPARTMENT_URL,
                method: "GET",
                params: arg,
              }),
              transformResponse: (response: IDepartment, meta: IMeta) => {
                return {
                  departments: response,
                  meta,
                };
              },
              providesTags: [tagTypes.department],
        }),
        addDepartment: build.mutation({
            query: (data) => ({
                url:DEPARTMENT_URL,
                method:'POST',
                data
            }),
            //for remove the previously cached data
            invalidatesTags:[tagTypes.department]
        }),
    }),
})

export const { useAddDepartmentMutation,useDepartmentsQuery } = departmentApi