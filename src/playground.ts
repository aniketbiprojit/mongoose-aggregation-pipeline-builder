import { PipelineStageBuilder } from "mongoose-aggregation-pipeline-builder";
/**
 * @description Generate string template from array of aggregation pipeline stages
 * This makes it easier to convert an array of stages into a string template
 */
const build = (_id: string) =>
  PipelineStageBuilder.fromArray([
    {
      $match: {
        _id: "_id",
      },
    },
    {
      $project: {
        _id: 1,
      },
    },
  ]);

console.log(build("_id"));
console.log(
  new PipelineStageBuilder().$match({ _id: "_id" }).$project({ _id: 1 }).build()
);
