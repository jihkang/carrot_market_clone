"use client";

import {throttle} from "@/utils/throttle"
import { useFormStatus } from "react-dom";


interface ButtonProps extends React.ButtonHTMLAttributes< HTMLButtonElement> {
    loading?: boolean;
    text: string;
}

export default function Button({text, ...rest}: ButtonProps
) {
    const {pending} = useFormStatus();
    return <button 
        disabled={pending}
        className="rounded-md px-2 primary-btn h-10 bg-gray-300 disabled:bg-neutral-400 disabled:text-netural-300 disabled:cursor-not-allowed"
        {...rest}
        >
        {pending ? "loading..." : text}
    </button>
}