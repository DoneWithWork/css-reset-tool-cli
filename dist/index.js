#!/usr/bin/env node
import { program } from "commander";
import fs from "fs";
import path from "path";
console.log(process.cwd());
// Define the CSS reset styles
const cssReset = `
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
program
    .version("0.0.1")
    .argument("<filename>", "CSS file to reset")
    .action((filename) => {
    try {
        const filePath = path.resolve(process.cwd(), filename);
        console.log(`Resolved file path: ${filePath}`);
        if (fs.existsSync(filePath)) {
            // Read the existing file content
            const fileContent = fs.readFileSync(filePath, "utf8");
            console.log("File content read successfully.");
            // Prepend the CSS reset styles
            const updatedContent = cssReset + fileContent;
            // Write back to the file
            fs.writeFileSync(filePath, updatedContent, "utf8");
            console.log(`Prepended CSS reset to ${filename}`);
        }
        else {
            console.error(`File not found: ${filename}`);
        }
    }
    catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map