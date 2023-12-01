## Run the frontend
- **1st** Run the api gateway backend.
    - `brew service start redis`
    - `yarn run dev`
- **2nd** Run the api auth service backend.
    - `yarn start`
- **3rd** Run the api core service backend.
    - `yarn start`
    
- **4th** Run the frontend
    - `yarn start`


##    initical setup done
- `npm install @reduxjs/toolkit react-redux`
- `npm install antd --save `


## Branches
- 13  [From Validation yup](https://github.com/bappasahabapi/rmstu-frontend/tree/v3/13/yup-form-input-validation)
- 12  [Reusable Component](https://github.com/bappasahabapi/rmstu-frontend/tree/v3/12/reusable)
- 11  [Role Based Route](https://github.com/bappasahabapi/rmstu-frontend/tree/v3/11/role-based-route)
- 10  🦋[**Login Logout Handle**](https://github.com/bappasahabapi/rmstu-frontend/tree/v2/10/loginLogout) - 2
- 09  [Local Storage](https://github.com/bappasahabapi/rmstu-frontend/tree/v2/09/localStorage) 
- 08  [Inject Authapi endpoints](https://github.com/bappasahabapi/rmstu-frontend/commits/v2/08/redux-baseApi) 
- 07  🦋[**Part-One**](https://github.com/bappasahabapi/rmstu-frontend/tree/v1/07/part-1) - 1
- 06  [React hook form](https://github.com/bappasahabapi/rmstu-frontend/tree/v1/06/react-hook-form) 
- 05  [**Render Dynamic Sidebar based on User Roles**](https://github.com/bappasahabapi/rmstu-frontend/tree/v1/05/render-dynamic-sidebar) 
- 04  [USER ROLE Based Sidebar](https://github.com/bappasahabapi/rmstu-frontend/tree/v1/04/role-based-route) 
- 03  [Basic Routing and Layput](https://github.com/bappasahabapi/rmstu-frontend/tree/v1/03/routing-layout) 
- 02  [Redux+RTK+ Antdesign Integrated](https://github.com/bappasahabapi/rmstu-frontend/tree/02/v1/redux-starter) - This is redux starter .
- 01  [main](https://github.com/bappasahabapi/rmstu-frontend) - This is main branch of **next js 13.4 app route** with ts.



# Notes:

 2️⃣.

- Route: `http://localhost:3000/student`
- Make `layout.tsx`, `loading.tsx`, `not-found.tsx`, `error.tsx` component same as next doc
- `https://ant.design/docs/react/use-with-next`
-  Use antd with next and provide the `StyledComponentsRegistry` component to the `Providers.tsx `.

3️⃣. **Customized Next js default layout & group wise layout.**

- first break down the dashboard layout into two parts: sidebar and layout for content.
- Make sidebar.tsx static and show out content right side
- `Route`:
    - http://localhost:3000/super-admin
    - http://localhost:3000/student

4️⃣. **Create Sidebar options based on User Roles**
5️⃣. **Render Dynamic Sidebar based on User Roles**
6️⃣. **Create hook form provider**
7️⃣. **Create reusable input fields**
8️⃣. **Create Login Page using reusable from**




