import axios from "axios";

const axios_instance = axios.create({
    baseURL: "https://api.rawg.io/api/",
});

export const getGames = () => {
    return fetch(
        `${axios_instance.defaults.baseURL}games?key=${process.env.REACT_APP_API_KEY}`
    );
};
