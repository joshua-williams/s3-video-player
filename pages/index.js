import MediaPlayer from '../components/MediaPlayer'
import PlaylistController from '../controllers/PlaylistController'

export async function getStaticProps () {
    const playlistController = new PlaylistController('Using React Hooks');
    const playlist = await playlistController.list();
    let pl = playlist;
    return {
        props: {
            playlist
        }
    }
}

const App = () => {
    return <>
    <html>
        <head>
            <meta charSet="utf8"/>
            <title>S3 Video Player</title>
            <meta name="viewport" content="initial-scale=1,shrink-to-fit=no"/>
        </head>
        <body>
            <MediaPlayer/>
        </body>
    </html>
    </>
};

export default App