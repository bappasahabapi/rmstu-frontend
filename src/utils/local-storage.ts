export const setToLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    console.log(token)

    localStorage.setItem(key,token)

};