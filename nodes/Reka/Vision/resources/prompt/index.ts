import type { INodeProperties } from 'n8n-workflow';
import { imagePromptParams } from './imagePrompt';
import { smallVideoPromptParams } from './smallVideoPrompt';

export const promptDescription: INodeProperties[] = [
	// Operations for Prompt
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['prompt'],
			},
		},
		options: [
			{
				name: 'DETECT IN AN IMAGE',
				value: 'detectInImage',
				action: 'Detect in an image',
				description: 'Detect objects or features in a specific image',
			},
			{
				name: 'PROMPT ABOUT AN IMAGE',
				value: 'imagePrompt',
				action: 'Prompt about an image',
				description: 'Write a prompt about a specific image',
				routing: {
					request: {
						method: 'POST',
						baseURL: 'https://api.reka.ai/v1/chat/completions',
					},
					send: {
						type: 'body',
						property: 'messages[0].role',
						value: '=user',
					},
				},
			},
			{
				name: 'PROMPT ABOUT A SMALL VIDEO',
				value: 'smallVideoPrompt',
				action: 'Prompt about a small video',
				description: 'Write a prompt about a specific small video (max 10 seconds)',
				routing: {
					request: {
						method: 'POST',
						baseURL: 'https://api.reka.ai/v1/chat/completions',
						// baseURL: 'https://eobzc7fdgbuhl3f.m.pipedream.net',
					},
					send: {
						type: 'body',
						property: 'messages[0].role',
						value: '=user',
					},
				},
			},
		],
		default: 'imagePrompt',
	},

	// Parameters for image and video prompts
	...imagePromptParams,
	...smallVideoPromptParams,
];