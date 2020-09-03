const Config = require('../services/Config');
const PlaylistService = require('../services/PlaylistService');

class PlaylistController {
    constructor(playlist, author) {
        this.playlistConfig = Config.getPlaylistConfig(playlist, author)
        this.service = new PlaylistService()
    }

    async list () {
        let playlist;
        await this.service.getPlaylist(this.playlistConfig)
            .then( response => playlist = response)
            .catch((err) => {
                throw new Error(err.message)
            });
        return playlist
    }
}

module.exports = PlaylistController