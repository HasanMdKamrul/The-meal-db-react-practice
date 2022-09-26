/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#289096",
        
"secondary": "#46f260",
        
"accent": "#5d28e2",
        
"neutral": "#1D2035",
        
"base-100": "#443B4A",
        
"info": "#69C4D8",
        
"success": "#46D2A6",
        
"warning": "#F7D259",
        
"error": "#FC2229",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")],
}