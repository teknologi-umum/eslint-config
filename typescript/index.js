module.exports = {
  extends: [
    "@teknologi-umum/eslint-config-base",
    "plugin:@typescript-eslint/recommended",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module"
  },

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint"],

  rules: {
    // we still need those @ts- comments
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "@typescript-eslint/no-implicit-any-catch": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-member-accessibility": ["off"],

    // you've come this far, yet still uses any??
    "@typescript-eslint/no-explicit-any": ["warn"],

    "@typescript-eslint/prefer-optional-chain": ["warn"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/no-empty-interface": ["warn"],

    "@typescript-eslint/no-array-constructor": ["off"]
  }
}
