import type { INodeProperties } from 'n8n-workflow';

export const detectInImageParams: INodeProperties[] = [
	{
		displayName: 'Detect',
		description: 'Specify the objects or features to detect in an image',
		required: true,
		name: 'detect',
		type: 'string',
		placeholder: 'face, eye, car, etc.',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].content[1]',
				value: '={{ { "type": "text", "text": "Detect: $value" } }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['detectInImage'],
			},
		},
	},
	{
		displayName: 'Image Url',
		description: 'Image URL to get the details for',
		required: true,
		name: 'image_url',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].content[0]',
				value: '={{ { "type": "image_url", "image_url": { "url": $value } } }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['detectInImage'],
			},
		},
	},
	{
		displayName: 'Model',
		description: 'Model to use for the image analysis',
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
				operation: ['detectInImage'],
			},
		},
	},
];