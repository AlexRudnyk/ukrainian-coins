import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mo: { max: "479.98px" },
      sm: "480px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/picsave_copy_.webp')",
        mobile: "url('/mobile-phone.svg')",
        telegram: "url('/telegram.svg')",
        github: "url('/github.svg')",
        linkedIn: "url('/linkedin.svg')",
        admin: "url('/admin.svg')",
        logout: "url('/logout.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
