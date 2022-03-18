const ytdl = require('ytdl-core')
const ytsearch = require('yt-search')

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: 'Music Bot hehe :3',
    async execute(message, args, cmd, client, Discord) {
        const voice_channel = message.member.voice.channel
    }
}