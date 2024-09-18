interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    errors: string[];
}

export default function Input({name, errors, ...rest}: InputProps) {
    return <div className="flex flex-col gap-2">
        <input className="px-2 bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            name={name}
            {...rest}
        />
        {errors?.map((err) => <span>{err}</span>)}
    </div>
}