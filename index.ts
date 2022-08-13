import * as fs from "fs";
import * as colors from "picocolors";
import terminalLink from "terminal-link";

export default function spark(file: fs.PathOrFileDescriptor) {
  const data = fs.readFileSync(file, "utf-8").split("\n");
  data.map((line) => {
    if (line.startsWith("#")) {
      console.log(colors.bold(line));
    }
    if (line.startsWith("##")) {
      console.log(colors.bgBlack(line));
    }
    if (line.startsWith("###")) {
      console.log(colors.underline(line));
    }
    const { groups } = line.match(/\[(?<label>.*)\]\((?<url>.*)\)/)!;
    if (groups) {
      const { label, url } = groups;
      console.log(terminalLink(label, url));
    }
    if (line.match(/\*\*([A-Za-z ]*)\*\*/)) {
      console.log(colors.bold(line));
    }
    if (line.match(/\*([A-Za-z ]*)\*/)) {
      console.log(colors.italic(line));
    }
    if (line.match(/\~\~([A-Za-z ]*)\~\~/)) {
      console.log(colors.strikethrough(line));
    }
  });
}
