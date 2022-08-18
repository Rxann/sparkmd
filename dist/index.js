"use strict";import*as a from"fs";import s from"picocolors";export default function c(t){a.readFileSync(t,"utf-8").split(`
`).map(o=>{o.startsWith("#")?console.log(s.bold(o)):o.startsWith("##")?console.log(s.bgBlack(o)):o.startsWith("###")?console.log(s.underline(o)):o.match(/\*\*([A-Za-z ]*)\*\*/)?console.log(s.bold(o)):o.match(/\*([A-Za-z ]*)\*/)?console.log(s.italic(o)):o.match(/\~\~([A-Za-z ]*)\~\~/)?console.log(s.strikethrough(o)):o.match(/\`([A-Za-z ]*)\`/)?console.log(s.bgBlack(o)):console.log(o)})}
//# sourceMappingURL=index.js.map
