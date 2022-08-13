const esbuild = require("esbuild");
const { typecheckPlugin } = require("@jgoz/esbuild-plugin-typecheck");
const config = {
  target: "node16",
  sourcemap: true,
  platform: "node",
  minify: true,
  entryPoints: ["./index.ts"],
  outdir: "./dist",
  plugins: [typecheckPlugin()],
};
esbuild.build(config).catch((err) => {
  console.error(err);
  process.exit(1);
});
