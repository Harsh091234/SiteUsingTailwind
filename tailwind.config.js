module.exports = {
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'), // Example plugin
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/filters'), // ✅ Ensure filters plugin is included (optional)
    ],
  };