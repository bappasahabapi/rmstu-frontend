import * as yup from "yup";

export const adminSchema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    admin: yup.object().shape({
        name: yup.object().shape({
            firstName: yup.string().required("First name is required"),
            middleName: yup.string().required("Middle name is required"),
            lastName: yup.string().required("Last name is required"),
        }),
        email: yup.string().email().required("Email is required"),
        designation: yup.string().required("Designation is required"),
        dateOfBirth: yup.string().required("Date of Birth is required")
    })
});


// {
//     "password": "123456",
//     "admin": {
//       "name": {
//         "firstName": "Admin",
//         "lastName": "5",
//         "middleName": "Aunto"
//       },
//       "dateOfBirth": "12-12-1994",
//       "gender": "male",
//       "bloodGroup": "O+",
//       "email": "admin_5@gmail.com",
//       "contactNo": "admin_5",
//       "emergencyContactNo": "01600000000",
//       "presentAddress": "Dhaka",
//       "permanentAddress": "Dhaka",
//       "managementDepartment": "64cd44da02f799152d4d1ca5",
//       "designation": "HR Manager",
//       "profileImage": "limk"
//     }
//   }