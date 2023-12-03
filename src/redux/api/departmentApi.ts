// http://localhost:3030/api/v1/management-departments
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi"

const DEPARTMENT_URL = "/management-departments";

export  const departmentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addDepartment: build.mutation({
            query: (data) => ({
                url:DEPARTMENT_URL,
                method:'POST',
                data
            }),
            invalidatesTags:[tagTypes.department]
        }),
    }),
})

export const { useAddDepartmentMutation } = departmentApi