/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            primary: "#DDDDDD",
            secondary: "#125D98",
            tertiary: "#3C8DAD",
            quaternary: {
                100: "#F5A962",
                200: "#dc9858",
                300: "#c4874e",
                400: "#ab7644",
                500: "#93653a",
                600: "#7a5431",
                700: "#624327",
                800: "#49321d",
                900: "#312113",
                1000: "#181009",
                1110: "#000000",
            },
        },
        extend: {},
    },
    plugins: [],
};
