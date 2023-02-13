import { ReactNode } from "react";
import { JsxChild } from "typescript";

export interface WrapperProps{
    children: ReactNode,
}

export interface FormField{
    labelName: string,
    type: string,
    name: string,
    placeholder: string,
    value: string,
    handleChange: (e:any) => void,
    isSupriceMe?: boolean,
    handleSupriceMe?: () => void
}