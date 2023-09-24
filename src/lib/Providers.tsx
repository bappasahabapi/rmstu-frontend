"use client";
// here we make a higher order component[Wrapper Component]
import { store } from "@/redux/store";
import { Provider } from "react-redux";

import StyledComponentsRegistry from './AntdRegistry';

const Providers = ({ children }: { children: React.ReactNode }) => {
    //this will return redux provider
    return (
        <Provider store={store}>
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </Provider>
    );
};

export default Providers;