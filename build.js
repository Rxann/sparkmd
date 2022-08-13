const esbuild = require("esbuild");
const config = {
  target: "node16",
  sourcemap: true,
  platform: "node",
  minify: true,
  entryPoints: ["./index.ts"],
  outdir: "./dist",
};
