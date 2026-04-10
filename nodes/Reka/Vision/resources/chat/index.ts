import type { INodeProperties } from 'n8n-workflow';
import { imageVideoChatParams } from './imageVideoChat';

export const imageAndVideoChatDescription: INodeProperties[] = [
	// Operations for Q&A
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chat'],
			},
		},
		options: [
			{
				name: 'SIMPLE PROMPT ABOUT IMAGE OR SHORT VIDEO',
				value: 'imageVideoPrompt',
				action: 'Prompt about an image or short video',
				description: 'Write a prompt about a specific image or short video',
				routing: {
					request: {
						method: 'POST',
						baseURL: 'https://api.reka.ai/v1/chat/completions',
					},
				},
			},
		],
		default: 'imageVideoPrompt',
	},

	// Parameters for image and video chat
	...imageVideoChatParams
];