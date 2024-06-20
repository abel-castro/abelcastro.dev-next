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
            a: {
              color: theme("colors.teal.500"),
              textDecoration: "none",
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
            // todo: add some settings for code syntax highlighting
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "prose",
    }),
  ],
};
export default config;
