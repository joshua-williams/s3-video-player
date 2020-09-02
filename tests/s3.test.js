const PlaylistController = require('../controllers/PlayListController');

test('should list playlist items', () => {
    const playlistController = new PlaylistController('Using React Hooks')
    const playlist = playlistController.list()
    console.log(playlist)
});