import { execSync, spawnSync } from "child_process";

const main = async () => {
  execSync("npm version patch");
  execSync("npm version build");

  const output = spawnSync("./runner.sh")?.stdout?.toString();

  if (output && output.trim().length > 0) {
    console.log(output);
    console.log("publishing...");
    process.exit(0);
  } else {
    console.log("No changes detected. Skipping publish.");
    process.exit(1);
  }
};

main().catch(console.error);
