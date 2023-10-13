import { setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo =({accessToken}:{accessToken:string})=>{
    console.log(accessToken)

    // setToLocalStorage("key",value)
    setToLocalStorage("accessToken",accessToken)

}