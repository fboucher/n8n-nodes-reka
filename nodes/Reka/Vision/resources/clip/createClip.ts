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
				displayName: 'Desired Font Size',
				description: 'Size of the font to use for the captions',
				hint: 'Must be between 60 and 120',
				name: 'desired_font_size',
				type: 'number',
				typeOptions: {
					minValue: 60,
					maxValue: 120,
				},
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.caption_style.desired_font_size',
					},
				},
				default: 120,
			},
			{
				displayName: 'Font Family',
				description: 'Font family to use for the captions',
				name: 'font_family',
				type: 'options',
				options: [
					{
						name: 'Bangers',
						value: 'Bangers',
					},
					{
						name: 'BebasNeue',
						value: 'BebasNeue',
					},
					{
						name: 'CaptionFont',
						value: 'CaptionFont',
					},
					{
						name: 'Lato',
						value: 'Lato',
					},
					{
						name: 'RobotoCondensed',
						value: 'RobotoCondensed',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'generation_config.caption_style.font_family',
					},
				},
				default: 'BebasNeue',
			},
			{
				displayName: 'Highlight Color',
				description: 'Color of the highlighted word text in the captions',
				name: 'highlight_color',
				type: 'color',
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.caption_style.highlight_color',
					},
				},
				default: '#FF7E4F',
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
				displayName: 'Position',
				description: 'Caption position',
				name: 'position',
				type: 'options',
				options: [
					{
						name: 'Top',
						value: 'top',
					},
					{
						name: 'Middle',
						value: 'middle',
					},
					{
						name: 'Bottom',
						value: 'bottom',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'generation_config.caption_style.position',
					},
				},
				default: 'bottom',
			},
			{
				displayName: 'Resolution',
				description: 'Resolution of the output video',
				name: 'resolution',
				type: 'options',
				hint: '1080p may incur HD processing fee',
				options: [
					{
						name: '240p',
						value: '240',
					},
					{
						name: '360p',
						value: '360',
					},
					{
						name: '480p',
						value: '480',
					},
					{
						name: '720p',
						value: '720',
					},
					{
						name: '1080p',
						value: '1080',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.resolution',
					},
				},
				default: '720',
			},
			{
				displayName: 'Stroke Color',
				description: 'Color of the stroke around the text in the captions',
				name: 'stroke_color',
				type: 'color',
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.caption_style.stroke_color',
					},
				},
				default: '#000000',
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
			{
				displayName: 'Text Color',
				description: 'Color of the text for the captions',
				name: 'text_color',
				type: 'color',
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.caption_style.text_color',
					},
				},
				default: '#FFFFFF',
			},
			{
				displayName: 'Text Transform',
				description: 'Text transform to apply to the captions',
				name: 'text_transform',
				type: 'options',
				options: [
					{
						name: 'Initial',
						value: 'initial',
					},
					{
						name: 'Uppercase',
						value: 'uppercase',
					},
					{
						name: 'Lowercase',
						value: 'lowercase',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'rendering_config.caption_style.text_transform',
					},
				},
				default: 'uppercase',
			},
		],
	},
];