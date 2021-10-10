module.exports = {
  // we want all `eslint:recommended` good stuff as well
  extends: [
    "eslint:recommended",
    "plugin:jsonc/base",
    "plugin:yml/standard",
    "plugin:toml/standard",
    "plugin:regexp/recommended",
  ],

  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },

  plugins: ["import", "node", "promise", "regexp"],

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

    // preventing bugs and increasing code clarity by
    // ensuring that block statements are wrapped in curly braces. 
    curly: ["error", "multi", "consistent"],

    // requires return statements to either always or never specify values.
    "consistent-return": ["error"],

    // warns against using the arrow function syntax in places where it
    // could be confused with a comparison operator.
    "no-confusing-arrow": ["error"],

    // Shadowing is the process by which a local variable shares the same name
    // as a variable in its containing scope
    "no-shadow": ["warn"],

    // useless stuffs
    "no-useless-return": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-call": ["error"],

    // just why tho
    "require-await": ["error"],

    // the force is strong with this one
    yoda: ["error"],

    // give them some styles!
    // warn instead of error because I don't want to give headaches to people
    "eol-last": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 2,
        comments: 100,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ],
    "no-multi-spaces": ["warn", {"ignoreEOLComments": false}],
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "padded-blocks": ["warn", "always"],
    "semi-style": ["warn", "last"],
    "semi-spacing": ["warn", {"before": false, "after": true}],
    "space-before-function-paren": ["warn", {
        "anonymous": "ignore",
        "named": "always",
        "asyncArrow": "always"
    }],
    "space-before-blocks": ["warn", "always"],
    "switch-colon-spacing": ["warn", {"after": true, "before": false}],
    "keyword-spacing": ["warn", { before: true, after: true }],

    "max-statements-per-line": ["error", {max: 1}]
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
    },
    {
      files: ["*.toml"],
      parser: "toml-eslint-parser",
    },
  ]
};
