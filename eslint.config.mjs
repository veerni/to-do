import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ("next/core-web-vitals", "next/typescript"),
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js does not require React to be in scope
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
      "import/no-anonymous-default-export": "off", // Allow anonymous default exports
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
    },
  }),
];

export default eslintConfig;
