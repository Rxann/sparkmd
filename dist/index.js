"use strict";import*as r from"fs";import*as t from"nanocolors";import a from"terminal-link";export default function i(s){r.readFileSync(s,"utf-8").split(`
`).map(o=>{o.startsWith("#")&&console.log(t.bold(o)),o.startsWith("##")&&console.log(t.bgBlack(o)),o.startsWith("###")&&console.log(t.underline(o)),o.includes("[")&&o.includes("]")&&console.log(a(o,o.split("(")[1].split(")")[0]))})}
//# sourceMappingURL=index.js.map
