import { type Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./index.html",
    "./client/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        faredown: {
          blue: "hsl(var(--faredown-blue))",
          orange: "hsl(var(--faredown-orange))",
          green: "hsl(var(--faredown-green))",
          red: "hsl(var(--faredown-red))",
          gray: "hsl(var(--faredown-gray))",
          light: "hsl(var(--faredown-light))",
        },
        price: {
          up: "hsl(var(--price-up))",
          down: "hsl(var(--price-down))",
          neutral: "hsl(var(--price-neutral))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};

export default config;
