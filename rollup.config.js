const Path = require("path");
const RollupPluginNodeResolve = require("@rollup/plugin-node-resolve").default;
const RollupPluginTs = require("@wessberg/rollup-plugin-ts");
const Typescript = require("typescript");
const packageJson = require("./package.json");

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: Path.resolve(__dirname, "./src/index.ts"),
    output: [
      {
        file: Path.resolve(__dirname, packageJson.main),
        format: "commonjs",
      },
    ],
    plugins: [
      RollupPluginNodeResolve({ mainFields: ["module", "main"] }),
      RollupPluginTs({
        cwd: __dirname,
        tsconfig: Path.resolve(__dirname, "tsconfig.json"),
        typescript: Typescript,
        exclude: ["node_modules/**", "**/*.mjs"],
      }),
    ],
  },
];

module.exports = config;
