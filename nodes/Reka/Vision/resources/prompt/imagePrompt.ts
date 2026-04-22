import type { INodeProperties } from 'n8n-workflow';

export const imagePromptParams: INodeProperties[] = [
	{
		displayName: 'Prompt',
		description: 'Prompt about an image',
		required: true,
		name: 'prompt',
		type: 'string',
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
				operation: ['imagePrompt'],
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
				operation: ['imagePrompt'],
			},
		},
	},
	{
		displayName: 'Role',
		description: 'Role of the message sender',
		required: true,
		name: 'role',
		type: 'string',
		placeholder: 'Keep it as user, unless you are sending a system message',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].role',
				value: '={{ $value }}',
			},
		},
		default: 'user',
		displayOptions: {
			show: {
				resource: ['prompt'],
				operation: ['imagePrompt'],
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
				operation: ['imagePrompt'],
			},
		},
	},
];