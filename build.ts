import { readFileSync, writeFileSync } from "fs";
import { PipelineType } from "./src/types";
import { PipelineStage } from "mongoose";
import { execSync } from "child_process";

const file_path = "node_modules/mongoose/types/pipelinestage.d.ts";

const file_contents = readFileSync(file_path, "utf-8").toString();

const find_str = "type PipelineStage";

const start_index = file_contents.indexOf(find_str);

const end_index = file_contents.slice(start_index).indexOf(";", start_index);

const useful_contents = file_contents
  .slice(start_index, end_index + start_index + 1)
  .split("\n")
  .splice(1)
  .map((e) => {
    return e.split(".")[1].split(";")[0];
  });

const make_first_letter_lower = (str: string) =>
  str[0].toLowerCase() + str.slice(1);

/**
 *   $addFields: PipelineStage.AddFields["$addFields"];
 */
const construct_types_elements = (key: string) => {
  const with_lower = make_first_letter_lower(key);
  return `$${with_lower}: PipelineStage.${key}["$${with_lower}"];\n`;
};

const before_types = readFileSync(
  "./data/before-types.txt",
  "utf-8"
).toString();

const generated_types =
  before_types +
  useful_contents
    .map((e) => {
      return construct_types_elements(e);
    })
    .join("\n") +
  "\n" +
  "}";

writeFileSync("./src/types.ts", generated_types);

const construct_index_elements = (key: string) => {
  const with_lower = make_first_letter_lower(key);
  let output = "";
  output += `$${with_lower}(args: PipelineType["$${with_lower}"]) {\n`;
  output += `  this._aggregateArr.push({ $${with_lower}: args });\n`;
  output += `  return this;\n`;
  output += `}\n`;
  return output;
};

const before_index = readFileSync(
  "./data/before-index.txt",
  "utf-8"
).toString();

const generated_index =
  before_index +
  useful_contents
    .map((e) => {
      return construct_index_elements(e);
    })
    .join("\n") +
  "\n" +
  "}";

writeFileSync("./src/index.ts", generated_index);

execSync("npx prettier --write ./src");

console.log("Generation complete. Exiting...");
