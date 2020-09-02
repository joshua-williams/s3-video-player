const config = require('../config');

const getPlaylistConfig = (playlist, author) => {
    for (key in config.playlists) {
        let playlistConfig = config.playlists[key];
        if (playlist != playlistConfig.name ) {
            continue;
        }
        if (!author) {
            return decoratePlaylistConfig(playlistConfig);
        }
        if (author != playlistConfig.author) {
            continue;
        }
        return decoratePlaylistConfig(playlistConfig);
    }
    return false;
}

const decoratePlaylistConfig = playlistConfig => {
    return {...playlistConfig, bucket: playlistConfig.bucket || config.bucket}
}

module.exports = {getPlaylistConfig}