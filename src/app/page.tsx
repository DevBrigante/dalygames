import { Container } from "@/components/container"
import { GameProps } from "@/utils/types/game"
import { BsArrowRightSquare } from 'react-icons/bs'
import { Input } from "@/components/input"
import { GameCard } from "@/components/gameCard"
import Image from "next/image"
import Link from "next/link"

async function getDailyGame() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { next: { revalidate: 320 } })
    return response.json()

  } catch (error) {
    throw new Error('Failed to fetch daily game')
  }
}

async function getGamesData() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, { next: { revalidate: 320 } })
    return response.json()

  } catch (error) {
    throw new Error('Failed to fetch daily game')
  }
}

export default async function Home() {
  const data: GameProps = await getDailyGame()
  const dataGames: GameProps[] = await getGamesData()

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você :)</h1>
        <Link href={`/game/${data.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold tex-xl text-white">{data.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image src={data.image_url} alt={data.title} priority={true} quality={100} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw" className="max-h-96 object-cover rounded-lg opacity-80 hover:opacity-50 transition-all duration-300" />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para você conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dataGames.map((item) => (
            <GameCard key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  )
}