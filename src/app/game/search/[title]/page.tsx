import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/game";
import { Input } from "@/components/input";
import { GameCard } from "@/components/gameCard";


async function getData(title: string) {
    try {
        const decodedTitle = decodeURI(title);
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodedTitle}`)
        return res.json()

    } catch (error) {
        return null;
    }
}

export default async function Search({ params: { title } }: { params: { title: string } }) {
    const games: GameProps[] = await getData(title);

    return (
        <main className="w-full text-black">
            <Container>
                <Input />
                {!games && (
                    <p>Esse jogo não foi encontrado!...</p>
                )}
                <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                    {games && games.map((item) => (
                        <GameCard key={item.id} data={item} />
                    ))}
                </section>
            </Container>
        </main>
    )
}