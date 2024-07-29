import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#f8fafc',
        primary: '#ed1a25ff',
        'primary-light': '#fcb314ff',
        'primary-blue': '#4f46e5',
        'text-primary': '#334155',
        'primary-border': '#e9eef5',
        dark: '#1E293B'
      }
    }
  },
  plugins: []
};
export default config;
