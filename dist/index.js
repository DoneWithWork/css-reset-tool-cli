#!/usr/bin/env node
import { program } from "commander";
import fs from "fs";
import path from "path";
console.log(process.cwd());
// Define the CSS reset styles
const cssReset = `
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
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