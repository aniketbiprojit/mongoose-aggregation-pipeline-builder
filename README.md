## PipelineStageBuilder

A fluent builder for MongoDB aggregation pipeline stages

```ts
new PipelineStageBuilder().$match({ _id: "_id" }).$project({ _id: 1 });
```

```ts
const aggregation = new PipelineStageBuilder()
  .$match({ _id: "_id" })
  .$project({ _id: 1 })
  .build();

const result = await model.aggregate(aggregation);
```

### Migration

Generate string template from array of aggregation pipeline stages. This makes it easier to convert an array of stages into a string template

```ts
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
```

### Supported aggregation pipeline stages:

- $addFields
- $bucket
- $bucketAuto
- $collStats
- $count
- $densify
- $fill
- $facet
- $geoNear
- $graphLookup
- $group
- $indexStats
- $limit
- $listSessions
- $lookup
- $match
- $merge
- $out
- $planCacheStats
- $project
- $redact
- $replaceRoot
- $replaceWith
- $sample
- $search
- $set
- $setWindowFields
- $skip
- $sort
- $sortByCount
- $unionWith
- $unset
- $unwind
