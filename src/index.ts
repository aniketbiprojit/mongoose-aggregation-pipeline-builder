import { type PipelineStage } from 'mongoose'
import { type PipelineType } from './types'

export class PipelineStageBuilder {
	private _aggregateArr: PipelineStage[] = []
	constructor() {}

	toArray() {
		return this._aggregateArr
	}

	static fromArray(arr: PipelineStage[]) {
		let builder = `new PipelineStageBuilder()`
		arr.forEach((obj) => {
			const totalKeys = Object.keys(obj)
			if (totalKeys.length !== 1) {
				throw new Error('Invalid aggregation pipeline')
			}
			const o = Object.keys(obj)[0] as keyof typeof obj

			builder += `\n.${o}(${JSON.stringify(obj[o])})`
		})
		return builder
	}

	/// aggregators
	$addFields(args: PipelineType['$addFields']) {
		this._aggregateArr.push({ $addFields: args })
		return this
	}
	$bucket(args: PipelineType['$bucket']) {
		this._aggregateArr.push({ $bucket: args })
		return this
	}
	$bucketAuto(args: PipelineType['$bucketAuto']) {
		this._aggregateArr.push({ $bucketAuto: args })
		return this
	}
	$collStats(args: PipelineType['$collStats']) {
		this._aggregateArr.push({ $collStats: args })
		return this
	}
	$count(args: PipelineType['$count']) {
		this._aggregateArr.push({ $count: args })
		return this
	}
	$densify(args: PipelineType['$densify']) {
		this._aggregateArr.push({ $densify: args })
		return this
	}
	$fill(args: PipelineType['$fill']) {
		this._aggregateArr.push({ $fill: args })
		return this
	}
	$facet(args: PipelineType['$facet']) {
		this._aggregateArr.push({ $facet: args })
		return this
	}
	$geoNear(args: PipelineType['$geoNear']) {
		this._aggregateArr.push({ $geoNear: args })
		return this
	}
	$graphLookup(args: PipelineType['$graphLookup']) {
		this._aggregateArr.push({ $graphLookup: args })
		return this
	}
	$group(args: PipelineType['$group']) {
		this._aggregateArr.push({ $group: args })
		return this
	}
	$indexStats(args: PipelineType['$indexStats']) {
		this._aggregateArr.push({ $indexStats: args })
		return this
	}
	$limit(args: PipelineType['$limit']) {
		this._aggregateArr.push({ $limit: args })
		return this
	}
	$listSessions(args: PipelineType['$listSessions']) {
		this._aggregateArr.push({ $listSessions: args })
		return this
	}
	$lookup(args: PipelineType['$lookup']) {
		this._aggregateArr.push({ $lookup: args })
		return this
	}
	$match(args: PipelineType['$match']) {
		this._aggregateArr.push({ $match: args })
		return this
	}
	$merge(args: PipelineType['$merge']) {
		this._aggregateArr.push({ $merge: args })
		return this
	}
	$out(args: PipelineType['$out']) {
		this._aggregateArr.push({ $out: args })
		return this
	}
	$planCacheStats(args: PipelineType['$planCacheStats']) {
		this._aggregateArr.push({ $planCacheStats: args })
		return this
	}
	$project(args: PipelineType['$project']) {
		this._aggregateArr.push({ $project: args })
		return this
	}
	$redact(args: PipelineType['$redact']) {
		this._aggregateArr.push({ $redact: args })
		return this
	}
	$replaceRoot(args: PipelineType['$replaceRoot']) {
		this._aggregateArr.push({ $replaceRoot: args })
		return this
	}
	$replaceWith(args: PipelineType['$replaceWith']) {
		this._aggregateArr.push({ $replaceWith: args })
		return this
	}
	$sample(args: PipelineType['$sample']) {
		this._aggregateArr.push({ $sample: args })
		return this
	}
	$search(args: PipelineType['$search']) {
		this._aggregateArr.push({ $search: args })
		return this
	}
	$set(args: PipelineType['$set']) {
		this._aggregateArr.push({ $set: args })
		return this
	}
	$setWindowFields(args: PipelineType['$setWindowFields']) {
		this._aggregateArr.push({ $setWindowFields: args })
		return this
	}
	$skip(args: PipelineType['$skip']) {
		this._aggregateArr.push({ $skip: args })
		return this
	}
	$sort(args: PipelineType['$sort']) {
		this._aggregateArr.push({ $sort: args })
		return this
	}
	$sortByCount(args: PipelineType['$sortByCount']) {
		this._aggregateArr.push({ $sortByCount: args })
		return this
	}
	$unionWith(args: PipelineType['$unionWith']) {
		this._aggregateArr.push({ $unionWith: args })
		return this
	}
	$unset(args: PipelineType['$unset']) {
		this._aggregateArr.push({ $unset: args })
		return this
	}
	$unwind(args: PipelineType['$unwind']) {
		this._aggregateArr.push({ $unwind: args })
		return this
	}
}
