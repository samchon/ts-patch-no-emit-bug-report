const cp = require("child_process");

console.log("------------------------------------------");
console.log("When noEmit is true");
console.log("------------------------------------------");
try {
    cp.execSync("npx tsc -p tsconfig.noEmit.json", { stdio: "inherit" });
} catch {}

console.log("------------------------------------------");
console.log("When noEmit is true");
console.log("------------------------------------------");
try {
    cp.execSync("npx tsc -p tsconfig.emit.json", { stdio: "inherit" });
} catch {}