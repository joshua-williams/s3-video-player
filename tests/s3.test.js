const PlaylistController = require('../controllers/PlayListController');

test('should list playlist items', async () => {
    const playlistController = new PlaylistController('Using React Hooks')
    const playlist = await playlistController.list();
    console.log(playlist);
});