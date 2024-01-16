Discord-Moralis-Webhook
A simple Node.js application that listens for Moralis webhook events and sends donation notifications to a Discord channel.

Table of Contents
Overview
Features
Prerequisites
Installation
Usage
Configuration
Dependencies
Contributing
License
Overview
Discord-Moralis-Webhook is a Node.js application designed to enhance your Discord server by providing real-time donation notifications from the Moralis platform. It uses Discord.js for interacting with Discord and Moralis for webhook signature verification.

Features
Listens for Moralis webhook events and sends donation notifications to a specified Discord channel.
Signature verification for enhanced security.
Easy configuration through environment variables.
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed
Discord bot token (to access Discord API)
Moralis API key
Discord channel ID
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/vrathikshenoy/Discord_bot.git
Install dependencies:

bash
Copy code
cd Discord-Moralis-Webhook
npm install
Usage
Set up your Discord bot and obtain the bot token.

Create a Discord channel for receiving donation notifications and obtain its ID.

Create a .env file in the project root and add the following variables:

env
Copy code
PORT=3001
PASS=your_discord_bot_token
APIKEY=your_moralis_api_key
CHANNEL=your_discord_channel_id
Start the application:

bash
Copy code
npm start
The application will listen for Moralis webhook events and send donation notifications to your Discord channel.

Configuration
The application can be configured using environment variables. Update the values in the .env file to customize the behavior.

PORT: The port on which the application will run. Default is 3001.
PASS: Your Discord bot token.
APIKEY: Your Moralis API key.
CHANNEL: The ID of the Discord channel for donation notifications.
Dependencies
express: Fast, unopinionated, minimalist web framework for Node.js.
discord.js: A powerful JavaScript library for interacting with the Discord API.
moralis: JavaScript SDK for Moralis.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

Replace the placeholders like yourusername, your_discord_bot_token, your_moralis_api_key, and your_discord_channel_id with your actual information. Customize the sections as needed for your project.
