module.exports = {
    content: ["./src/**/*.{html,js}"],
    purge: [ "./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", ],
    theme: {
      extend: {},
      container: {
        center: true,
      },
    },
    plugins: [],
  }