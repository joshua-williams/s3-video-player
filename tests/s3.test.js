const PlaylistController = require('../controllers/PlayListController');

test('should list playlist items', async () => {
    const playlistController = new PlaylistController('Using React Hooks')
    const playlist = await playlistController.list();
    for (let key in playlist) {
        console.log(playlist[key].items)
    }
});