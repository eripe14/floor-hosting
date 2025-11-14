/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#020617",
                surface: "#020617",
                accent: "#38bdf8",
                accentSoft: "#0b1220",
                muted: "#9ca3af",
            },
        },
    },
};
