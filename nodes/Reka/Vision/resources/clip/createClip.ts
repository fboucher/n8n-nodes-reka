import type { INodeProperties } from 'n8n-workflow';


export const createClipParams: INodeProperties[] = [
	//Required Fields
	{
		displayName: 'Video URL',
		description: 'URL of input video',
		required: true,
		name: 'video_urls',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'video_urls',
				value: '={{ [$value] }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clip'],
				operation: ['createClip'],
			},
		},
	},
	{
		displayName: 'Prompt',
		description: 'Description of the reel to generate',
		required: true,
		name: 'prompt',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
		default: 'Create an engaging short video highlighting the best moments',
		displayOptions: {
			show: {
				resource: ['clip'],
				operation: ['createClip'],
			},
		},
	},

	//Optional Fields
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['clip'],
				operation: ['createClip'],
			},
		},
		options: [
			{
				displayName: 'Aspect Ratio',
				description: 'Aspect ratio of the output video',
				name: 'aspect_ratio',
				type: 'options',
				options: [
					{
						name: '9:16',
						value: '9:16',
					},
					{
						name: '16:9',
						value: '16:9',
					},
					{
						name: '4:5',
						value: '4:5',
					},
					{
						name: '1:1',
						value: '1:1',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.aspect_ratio',
					},
				},
				default: '9:16',
			},
			{
				displayName: 'Max Duration Seconds',
				description: 'Maximum duration of the output video in seconds',
				name: 'max_duration_seconds',
				type: 'number',

				routing: {
					send: {
						type: 'body',
						property: 'generation_config.max_duration_seconds',
					},
				},
				default: 60,
			},
			{
				displayName: 'Min Duration Seconds',
				description: 'Minimum duration of the output video in seconds',
				name: 'min_duration_seconds',
				type: 'number',
				routing: {
					send: {
						type: 'body',
						property: 'generation_config.min_duration_seconds',
					},
				},
				default: 30,
			},
			{
				displayName: 'Number of Generations',
				description: 'Number of generations to produce',
				hint: 'Must be between 1 and 3',
				name: 'num_generations',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 3,
				},
				routing: {
					send: {
						type: 'body',
						property: 'generation_config.num_generations',
					},
				},
				default: 1,
			},
			{
				displayName: 'Subtitles',
				description: 'Whether to include subtitles in the reel',
				name: 'subtitles',
				type: 'boolean',
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.subtitles',
					},
				},
				default: true,
			},
			{
				displayName: 'Template',
				description: 'Template to use for generation',
				name: 'template',
				type: 'options',
				options: [
					{
						name: 'Moments',
						value: 'moments',
					},
					{
						name: 'Compilation',
						value: 'compilation',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'generation_config.template',
					},
				},
				default: 'moments',
			},
		],
	},
];