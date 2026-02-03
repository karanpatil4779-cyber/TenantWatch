import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        safe_green: '#22c55e',   // green-500
        warning_amber: '#f59e0b', // amber-500
        urgent_red: '#ef4444',     // red-500
        glass_border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Correctly reference the CSS variable
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        'xl': '24px',
      }
    },
  },
  plugins: [],
};
export default config;
