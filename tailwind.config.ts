import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        noto: ['var(--font-noto-sans)'],
      },
      colors: {
        background: {
          500: '#615D6C',
        },
        reviewCardLeadership: {
          500: '#ffcb96',
          600: "#fea877"
        },
        reviewCardExcellence: {
          500: "#c1d3fd",
          600: '#97b3f6'
        },
        reviewCardShowingUp: {
          500: "#b3dcf2",
          600: '#79c7eb'
        },
        reviewCardPositivity: {
          500: "#fede89",
          600: '#fac739'
        },
        reviewCardTeamPlayer: {
          500: "#9fe9dc",
          600: '#86d9ca'
        },
        header: {
          500: '#CAE5FF',
        }
      }
    },
  },
  plugins: [],
};
export default config;
