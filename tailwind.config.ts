import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            // see https://stackoverflow.com/questions/74914969/override-65ch-max-width-in-tailwind-css-typography
            maxWidth: "100ch",
            color: theme("colors.white"),
            h1: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            h3: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            h4: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            h5: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            h6: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            code: {
              color: theme("colors.sky.200"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            a: {
              color: theme("colors.teal.500"),
              "&:hover": {
                color: theme("colors.teal.700"),
              },
            },
            strong: {
              color: theme("colors.white"),
              fontWeight: theme("fontWeight.bold"),
            },
            u: {
              textDecoration: "underline",
              textDecorationColor: theme("colors.blue.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "from-markdown",
    }),
  ],
};
export default config;
