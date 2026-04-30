

# n8n-nodes-reka

[![version](https://img.shields.io/npm/v/n8n-nodes-text-manipulation.svg)](https://www.npmjs.org/package/n8n-nodes-text-manipulation)

Official Reka community node that provides various capability with AI Vision. (soon Research, Speech, and Text)

## Operations

### Video Clipping

- Automatically clip a video from a URL

### Vision

- Prompt AI about images and small videos

- Question and Answer (Q&A) from video

- Question and Answer (Q&A) from image

### Speech

- soon

### Research

- soon

## Credentials

Theses nodes requires an API Key from Reka, You can generate one by going to your [Dashboard](https://link.reka.ai/free).

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Usage

We are working on a more detailed documentation, meanwhile have a look to this [blog post](https://www.frankysnotes.com/2025/12/building-ai-powered-youtube-clipper.html) or [video](https://www.youtube.com/watch?v=6YV6K94m_FA) to learn How to Automate Clipping Using Reka's community node.

### Clip

From a existing video (ex: YouTube) generate a vertical or horizontal clip using AI. Specific your instructions in a prompt (ex: Create an engaging short video highlighting the best moments) and voila! Optionally you can add burned captions, specify the minimum and maximum duration of your clip. Once ready you will get your video clip with a suggestion of title, description and tags.

### Prompt

Ask any question about an image or a short video (up to ~10 seconds) and get an instant AI response.

**Examples:**

- Describe this image
- Summarize this video

You can also detect objects in images. Provide the name of the object you're looking for, and AI will return the bounding box coordinates if it's found.

**Examples:**

- eye
- flower


### Q&A

Ask any question about a image or a video and get the response quickly. The video and images are first uploaded using the media management actions, then you can ask all your questions. This support long videos.

**Examples:** 

- Describe this image
- Summarize this video
- What's the color of the car in this photo


## Resources

- **[n8n Node Documentation](https://docs.n8n.io/integrations/creating-nodes/)** - Complete guide to building nodes
- **[n8n Community Forum](https://community.n8n.io/)** - Get help and share your nodes
- **[Reka Community Discord](https://link.reka.ai/discord)** - Get help and share your workflows
- **[Reka API Documentaion](https://docs.reka.ai)** - Get help and share your workflows

## 🤝 Contributions

If you find a bug or would like to add a feature, please read our [Code of Conduct](CODE_OF_CONDUCT.md) and the [Contributing Guide](CONTRIBUTING.md).

Feel free to open an issue or submit a feedback PR and improvements are welcome.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
