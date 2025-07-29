module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#0b0f1a",
                primary: "#38f9d7",
                secondary: "#1f2833",
                light: "#c5c6c7",
            },
            boxShadow: {
                glow: "0 0 10px #38f9d7, 0 0 20px #38f9d7",
            },
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out",
                bounceIn: "bounceIn 1s ease-in-out",
                slowPulse: "slowPulse 10s infinite",
                glow: "glow 6s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                bounceIn: {
                    "0%": { transform: "scale(0.8)", opacity: 0 },
                    "50%": { transform: "scale(1.1)", opacity: 1 },
                    "100%": { transform: "scale(1)" },
                },
                slowPulse: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                    "100%": { transform: "scale(1)" },
                },
                glow: {
                    "0%": {
                        boxShadow: "0 0 20px #38f9d6, 0 0 50px #38f9d6",
                        transform: "scale(1)",
                    },
                    "50%": {
                        boxShadow: "0 0 40px #38f9d6, 0 0 100px #38f9d6",
                        transform: "scale(1.1)",
                    },
                    "100%": {
                        boxShadow: "0 0 20px #38f9d6, 0 0 50px #38f9d6",
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
