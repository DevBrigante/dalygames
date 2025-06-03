'use client'
import { FormEvent, useState } from "react"
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export function Input() {
    const [input, setInput] = useState('')
    const router = useRouter()

    function handleSearch(e: FormEvent) {
        e.preventDefault()
        if (!input) return;

        router.push(`/game/search/${input}`)
    }

    return (
        <form onSubmit={handleSearch} className="flex w-full bg-slate-200 my-5 gap-2 items-center justify-between rounded-lg p-2">
            <input type="text" placeholder="Digite o nome do jogo que está procurando..." className="bg-slate-200 outline-none w-11/12" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="cursor-pointer">
                <FiSearch size={24} color="#ea580c" />
            </button>
        </form>
    )
}