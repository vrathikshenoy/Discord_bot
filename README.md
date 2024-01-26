# Discord-Moralis-Webhook

## Overview

Discord-Moralis-Webhook is a Node.js application designed to enhance your Discord server by providing real-time donation notifications from the Moralis platform. It uses Discord.js for interacting with Discord and Moralis for webhook signature verification.

## Features

- Listens for Moralis webhook events and sends donation notifications to a specified Discord channel.
- Signature verification for enhanced security.
- Easy configuration through environment variables.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- Discord bot token (to access Discord API)
- Moralis API key
- Discord channel ID

## Installation

Clone the repository:

git clone https://github.com/vrathikshenoy/Discord_bot.git
cd Discord-Moralis-Webhook
npm install

## Usage
1. Set up your Discord bot and obtain the bot token.
2. Create a Discord channel for receiving donation notifications and obtain its ID.
3. Create a `.env` file in the project root and add the following variables:

   ```env
   PORT=3001
   PASS=your_discord_bot_token
   APIKEY=your_moralis_api_key
   CHANNEL=your_discord_channel_id
## Dependencies
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `discord.js`: A powerful JavaScript library for interacting with the Discord API.
- `moralis`: JavaScript SDK for Moralis.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

Replace the placeholders like `your_discord_bot_token`, `your_moralis_api_key`, and `your_discord_channel_id` with your actual information. Customize the sections as needed for your project.

