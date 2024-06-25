const plugin = require("tailwindcss/plugin");
const defaultColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    plugin(({ addVariant }) => {
      addVariant("group-hover", [".group:hover &", ".group.hover &"]);
      addVariant("hover", ["&:hover", "&.hover"]);
      addVariant("active", ["&:active", "&.active"]);
    }),
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xxsm: "360px",
        xsm: "393px",
        sm: "640px",
        md: "736px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "120/63": "120 / 63",
      },
      colors: {
        ...defaultColors,
        brand: {
          25: "#15334D",
          50: "#1A3144",
          100: "#223B50",
          200: "#334A5F",
          300: "#2C4357",
          400: "#8866F0",
          500: "#15334D",
          600: "#8EAAC4",
          700: "#5833C3",
          800: "#4822B4",
          900: "#12293E",
          1000: "#009dff",
          1100: "#008ae0",
          1200: "#2D5475",
          1300: "#1C3245B2",
        },
      },
    },
  },
};

export default config;
