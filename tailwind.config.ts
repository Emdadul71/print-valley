import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["class"],
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      screens: {
        xsm: "500px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#023047",
        secondary: "#f86011",
        secondarylight: "#FFF3F7",
        bluelight: "#f4fbff",
        body: "#3d3d3d",
        paragraph: "#2b2a29",
        black: "#111111",
        white: "#ffffff",
        grey: "#feefe7",
        // gray: "#f8f9fa",
        greylight: "#eeeeee",
        danger: "#ff5a5a;",
        hoverone: "#ffe835",
        hovertwo: "#002f5b",
      },
      fontSize: {
        headerLg: "56px",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
