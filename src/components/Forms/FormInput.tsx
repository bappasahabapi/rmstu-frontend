"use client"

import Input from "antd/es/input/Input";
import { Controller, useFormContext } from "react-hook-form";




interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validaton?: object;
    label?: string;
}

const FormInput = ({
    name,
    type,
    size,
    value,
    validaton,
    label,
    placeholder,
    id
}: IInput) => {

    const { control } = useFormContext();

    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <Input
                        type={type}
                        size={size}
                        placeholder={placeholder}
                        {...field}
                        value={value ? value : field.value}
                    />
                )}


            />

        </>
    );
};

export default FormInput;