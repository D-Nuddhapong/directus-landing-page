/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,ts}"],
  safelist:[{
    pattern: /rounded|text|px|py|mx|my|flex|justify|items/,
  }],
  plugins: [],
}
