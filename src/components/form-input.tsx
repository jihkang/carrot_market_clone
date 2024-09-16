export default function FormInput({required = true, type, placeholder, error, name} : {required?: boolean, type: string, placeholder:string, error?: string, name: string}) {
    return <div className="flex flex-col gap-2">
        <input className="px-2 bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            />
        <span className="text-red-500 font-medium">
            {error}
        </span>
    </div>
}