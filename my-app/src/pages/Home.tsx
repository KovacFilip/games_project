import { useEffect, useState } from "react";
import { getGames } from "../api/axios";

export const HomePage = () => {
    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        getGames()
            .then(async (res) => {
                const data = await res.json();
                setGames(data.results);
                console.log(data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {games.map((game) => {
                console.log(game);
                return (
                    <div>
                        {game.id}, {game.name}
                    </div>
                );
            })}
        </>
    );
};
