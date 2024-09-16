"use client";

import {throttle} from "@/utils/throttle"
import { useFormStatus } from "react-dom";


interface ButtonProps {
    loading?: boolean;
    text: string;
}

export default function FormButton({text}: ButtonProps) {
    const {pending} = useFormStatus();
    return <button 
        disabled={pending}
        className="rounded-md px-2 primary-btn h-10 bg-gray-300 disabled:bg-neutral-400 disabled:text-netural-300 disabled:cursor-not-allowed"
        >
        {pending ? "loading..." : text}
    </button>
}