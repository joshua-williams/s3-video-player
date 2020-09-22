const Config = require('../services/Config');
const PlaylistService = require('../services/PlaylistService');

class PlaylistController {
    constructor(playlist, author) {
        this.service = new PlaylistService()
    }

    async list (playlistName, authorName) {
        let playlistConfig = Config.getPlaylistConfig(playlistName, authorName);
        let playlist;
        await this.service.getPlaylist(playlistConfig)
            .then( response => playlist = response)
            .catch((err) => {
                throw new Error(err)
            });
        return playlist
    }
}

module.exports = PlaylistController