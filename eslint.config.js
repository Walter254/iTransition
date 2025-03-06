import { defineConfig } from "eslint-define-config";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  {
    languageOptions: {
      globals: {
        // Define any global variables here
      },
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"], // Adjust this if your source files are in a different directory
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Add any custom rules here
      "no-unused-vars": "warn", // Example rule
      "import/no-unresolved": "error", // Example rule
      "prettier/prettier": "error",
      // Add other rules as needed
    },
  },
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"], // Specify the file types to apply these rules
    rules: {
      // Include rules from eslint:recommended
      "no-console": "warn",
      "no-debugger": "warn",
      // Include rules from plugin:prettier/recommended
      "prettier/prettier": ["error"],
    },
  },
]);
