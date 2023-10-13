import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo =({accessToken}:{accessToken:string})=>{
    console.log(accessToken);

    // setToLocalStorage("key",value)
   return setToLocalStorage(authKey,accessToken as string)

};

export const getUserInfo =()=>{

    // const authToken = getFromLocalStorage("key")
    const authToken = getFromLocalStorage(authKey)
    console.log(authToken);
    if(authToken){
        const decodedData =decodedToken(authToken)
        console.log(decodedData)
        return decodedData;
    }
    else{
        return ""
    }

};

