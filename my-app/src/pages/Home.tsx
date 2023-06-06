import { useEffect, useState } from "react";
import { getGames } from "../api/axios";
import { GameItem } from "../games/GameItem";

export const HomePage = () => {
    const [games, setGames] = useState<any[]>([]);

    useEffect(() => {
        getGames()
            .then(async (res) => {
                const data = await res.json();
                setGames(data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {games.map((game) => {
                    return (
                        <GameItem
                            title={game.name}
                            releaseDate={game.released}
                            imageLink={game.background_image}
                        />
                    );
                })}
            </div>
        </div>
    );
};
