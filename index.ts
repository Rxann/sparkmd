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
  });
}
