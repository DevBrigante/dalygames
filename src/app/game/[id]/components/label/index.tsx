
interface LabelProps {
    name: string
}

export function Label({ name }: LabelProps) {
    return (
        <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 rounded-lg text-black text-center hover:font-bold duration-200 cursor-cell">
            {name}
        </div>
    )
}