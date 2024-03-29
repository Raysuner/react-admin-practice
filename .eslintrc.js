module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  /* 解析器选项配置 */
  parserOptions: {
    /* 启用最新版本js */
    ecmaVersion: "latest"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // 接入hook规则
    "plugin:react-hooks/recommended",
    // 接入 prettier 的规则
    "prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
