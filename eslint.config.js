import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@components", "./src/components"],
            ["@assets", "./src/assets"],
            ["@hooks", "./src/hooks"],
            ["@layouts", "./src/layouts"],
            ["@pages", "./src/pages"],
            ["@services", "./src/services"],
            ["@store", "./src/store"],
            ["@types", "./src/types"],
            ["@utils", "./src/utils"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "warn",
      "linebreak-style": ["error", "windows"],
      "arrow-body-style": ["error", "as-needed"],
      "import/order": "error",
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
    },
  },
);
