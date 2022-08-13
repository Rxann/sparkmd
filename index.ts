import * as fs from "fs";
import colors from "picocolors";
import terminalLink from "terminal-link";

export default function spark(file: fs.PathOrFileDescriptor) {
  const data = fs.readFileSync(file, "utf-8").split("\n");
  data.map((line) => {
    if (line.startsWith("#")) {
      console.log(colors.bold(line));
    } else if (line.startsWith("##")) {
      console.log(colors.bgBlack(line));
    } else if (line.startsWith("###")) {
      console.log(colors.underline(line));
    } else if (line.match(/\*\*([A-Za-z ]*)\*\*/)) {
      console.log(colors.bold(line));
    } else if (line.match(/\*([A-Za-z ]*)\*/)) {
      console.log(colors.italic(line));
    } else if (line.match(/\~\~([A-Za-z ]*)\~\~/)) {
      console.log(colors.strikethrough(line));
    } else {
      console.log(line);
    }
  });
}
