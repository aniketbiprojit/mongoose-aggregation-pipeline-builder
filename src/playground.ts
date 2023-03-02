import { PipelineStageBuilder } from './index'
const build = (_id: string) =>
	PipelineStageBuilder.fromArray([
		{
			$match: {
				_id: '_id',
			},
		},
		{
			$project: {
				_id: 1,
			},
		},
	])

console.log(build('_id'))
