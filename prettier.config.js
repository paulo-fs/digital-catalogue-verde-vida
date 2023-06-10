module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: '.ts*',
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
}
