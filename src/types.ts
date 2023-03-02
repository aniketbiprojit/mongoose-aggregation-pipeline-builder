import { PipelineStage } from 'mongoose'

export type PipelineType = {
	$addFields: PipelineStage.AddFields['$addFields']

	$bucket: PipelineStage.Bucket['$bucket']

	$bucketAuto: PipelineStage.BucketAuto['$bucketAuto']

	$collStats: PipelineStage.CollStats['$collStats']

	$count: PipelineStage.Count['$count']

	$densify: PipelineStage.Densify['$densify']

	$fill: PipelineStage.Fill['$fill']

	$facet: PipelineStage.Facet['$facet']

	$geoNear: PipelineStage.GeoNear['$geoNear']

	$graphLookup: PipelineStage.GraphLookup['$graphLookup']

	$group: PipelineStage.Group['$group']

	$indexStats: PipelineStage.IndexStats['$indexStats']

	$limit: PipelineStage.Limit['$limit']

	$listSessions: PipelineStage.ListSessions['$listSessions']

	$lookup: PipelineStage.Lookup['$lookup']

	$match: PipelineStage.Match['$match']

	$merge: PipelineStage.Merge['$merge']

	$out: PipelineStage.Out['$out']

	$planCacheStats: PipelineStage.PlanCacheStats['$planCacheStats']

	$project: PipelineStage.Project['$project']

	$redact: PipelineStage.Redact['$redact']

	$replaceRoot: PipelineStage.ReplaceRoot['$replaceRoot']

	$replaceWith: PipelineStage.ReplaceWith['$replaceWith']

	$sample: PipelineStage.Sample['$sample']

	$search: PipelineStage.Search['$search']

	$set: PipelineStage.Set['$set']

	$setWindowFields: PipelineStage.SetWindowFields['$setWindowFields']

	$skip: PipelineStage.Skip['$skip']

	$sort: PipelineStage.Sort['$sort']

	$sortByCount: PipelineStage.SortByCount['$sortByCount']

	$unionWith: PipelineStage.UnionWith['$unionWith']

	$unset: PipelineStage.Unset['$unset']

	$unwind: PipelineStage.Unwind['$unwind']
}
