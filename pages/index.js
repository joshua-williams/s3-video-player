import MediaPlayer from '../components/MediaPlayer'
import PlaylistController from '../controllers/PlaylistController'

export async function getStaticProps () {
    const playlistController = new PlaylistController();
    const playlist = await playlistController.list('Using React Hooks');
    return {
        props: {
            playlist
        }
    }
}

const App = (props) => {
    return <>
    <html>
        <head>
            <meta charSet="utf8"/>
            <title>S3 Video Player</title>
            <meta name="viewport" content="initial-scale=1,shrink-to-fit=no"/>
        </head>
        <body>
            <MediaPlayer playlist={props.playlist}/>
        </body>
    </html>
    </>
};

export default App