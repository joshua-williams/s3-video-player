const Config = require('../services/Config');
const PlaylistService = require('../services/PlaylistService');

class PlaylistController {
    constructor(playlist, author) {
        this.playlistConfig = Config.getPlaylistConfig(playlist, author)
        this.service = new PlaylistService()
    }

    list () {
        const items = this.service.getPlaylist(this.playlistConfig)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            });
        return items;
    }
}

module.exports = PlaylistController