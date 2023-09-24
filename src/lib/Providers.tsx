"use client";
// here we make a higher order component[Wrapper Component]
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
    //this will return redux provider
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;