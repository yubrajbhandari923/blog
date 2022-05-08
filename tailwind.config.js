module.exports = {
  content: [
    'app.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  // mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        // https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2e7c9
        // https://coolors.co/340068-ff6978-fffcf9-b1ede8-6d435a
        color1: '#340068',
        color2: '#ff6978',
        color3: '#fffcf9',
        color4: '#b1ede8',
        color5: '#6d435a',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        koulen: ['Koulen', 'sans-serif'],
        waterbrush: ['Water Brush', 'cursive'],
        oleoscript: ['Oleo Script', 'cursive'],
      },
      animation: {
        bounceslow: 'bounce 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
