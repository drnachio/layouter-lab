/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  semi: true,
  "newline-before-return": true,
  "no-duplicate-variable": [true, "check-parameters"],
  "no-var-keyword": true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
