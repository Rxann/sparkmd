import * as fs from "fs";
import * as colors from "nanocolors";
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
    // if a string includes markdown link characters, print the link part of the string in a terminal link
    if (line.includes("[") && line.includes("]")) {
      const link = line.split("[")[1].split("]")[0];
      console.log(terminalLink(link, link));
    }
  });
}
