import type { INodeProperties } from 'n8n-workflow';

export const smallVideoPromptParams: INodeProperties[] = [
	{
		displayName: 'Prompt',
		description: 'Prompt about a small video',
		required: true,
		name: 'prompt',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		placeholder: 'Describe this media',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].content[1]',
				value: '={{ { "type": "text", "text": $value } }}',
			},
		},
		default: 'Describe this media',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['smallVideoPrompt'],
			},
		},
	},
	{
		displayName: 'Video Url',
		description: 'Video URL to get the details for',
		required: true,
		name: 'video_url',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].content[0]',
				value: '={{ { "type": "video_url", "video_url": { "url": $value } } }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['smallVideoPrompt'],
			},
		},
	},
	{
		displayName: 'Model',
		description: 'Model to use for the small video analysis',
		required: true,
		name: 'model',
		type: 'options',
		options: [
			{
				name: 'reka-edge',
				value: 'reka-edge',
			},
			{
				name: 'reka-flash',
				value: 'reka-flash',
			},
		],

		routing: {
			send: {
				type: 'body',
				property: 'model',
				value: '={{ $value }}',
			},
		},
		default: 'reka-edge',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['smallVideoPrompt'],
			},
		},
	},
];