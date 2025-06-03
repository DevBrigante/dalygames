'use client'

import { FiEdit, FiX, FiTrash } from "react-icons/fi"
import { useState } from "react"

export function FavoriteCart() {
    const [input, setInput] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [gameName, setGameName] = useState("")
    const [trash, setTrash] = useState(false)

    function handleButton() {
        setShowInput(!showInput)
        if (input !== "") {
            setGameName(input)
        }
        setInput("")
    }

    function handleDeletePost() {
        setTrash(!trash)

        if (trash) {
            setGameName("")
        }
    }


    return (
        <div className="w-full bg-gray-900 text-white p-4 h-44 rounded-lg flex flex-col justify-between">
            {showInput ? (
                <div className="flex items-center justify-center gap-3">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-md h-8 text-black px-2 bg-white" />
                    <button onClick={handleButton} className="cursor-pointer">
                        <FiX size={24} color="#FFF" />
                    </button>
                </div>
            ) : (
                <div className="flex gap-2">
                    <button className="self-start hover:scale-110 duration-100 transition-all cursor-pointer" onClick={handleButton}>
                        <FiEdit size={24} color="#FFF" />
                    </button>
                    <button className="hover:scale-110 duration-100 transition-all cursor-pointer" onClick={handleDeletePost}>
                        <FiTrash size={24} color="#FFF" />
                    </button>
                </div>

            )}

            {gameName && (
                <div>
                    <span>Jogo favorito: </span>
                    <p className="font-bold text-white">{gameName}</p>
                </div>

            )}
            {!gameName && (
                <p className="font-bold text-white">Adicionar jogo</p>
            )}
        </div>
    )
}