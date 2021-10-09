module.exports = {
  // we want all `eslint:recommended` good stuff as well
  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },

  env: {
    es2021: true,
    node: true,
  },

  plugins: ["import", "node", "promise"],

  globals: {
    // don't mutate global variables
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },

  rules: {
    // don't await inside a loop, use Promise.all or similar
    "no-await-in-loop": ["error"],

    // so you don't forget to remove your leftover from improper debugging
    "no-console": ["warn"],

    // don't do useless cast
    "no-extra-boolean-cast": ["error"],

    // don't add unecessary parens
    "no-extra-parens": ["error"],

    // bruh, it's 2021
    "no-var": ["error"],

    // if you're not going to use it,
    // might as well don't write it in the first place
    "no-empty-function": ["error"],

    // explicit is better than implicit
    "no-implicit-coercion": ["error"],

    // prevent you from typo of " or ' instead or `
    // when you want a template literal
    "no-template-curly-in-string": ["error"],

    // eval is evil
    "no-eval": ["error"],

    // return-await only useful if it has try-catch
    // see: https://jakearchibald.com/2017/await-vs-return-vs-return-await/
    "no-return-await": ["error"],

    // as all things should be
    "no-use-before-define": ["error"],

    // trailing comma only allowed for multiline
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],

    // only allows space after comma
    // ex: [1, 2, 3, 4]   valid
    //     [1 ,2 , 3 ,4]  invalid
    "comma-spacing": ["error", { before: false, after: true }],

    // don't add space around curly braces, it's useless
    // ex: `${foo + bar}`   valid
    //     `${ foo + bar }` invalid
    "template-curly-spacing": ["error", "never"],

    // space makes it ambiguous
    // ex: (...foo)   valid
    //     (... foo)  invalid
    "rest-spread-spacing": ["error", "never"],

    // again, be explicit, `arguments` can be overriden anyway
    // ex: (...arg) => { return args }  valid
    //     () => { return arguments }   invalid
    "prefer-rest-params": ["error", "always"],

    // use `let` or `const` properly
    "prefer-const": ["error"],

    // use spread operator instead of .apply()
    "prefer-spread": ["warn"],

    // == is not enough, we need ===
    eqeqeq: ["error"],
  },
};
