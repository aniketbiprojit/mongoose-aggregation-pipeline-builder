## PipelineStageBuilder - A fluent builder for MongoDB aggregation pipeline stages

```ts
new PipelineStageBuilder()
    .$match({ _id: '_id' })
    .$project({ _id: 1 })
```