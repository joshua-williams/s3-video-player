import React from 'react';
import Playlist from './Playlist';

class MediaPlayer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <section>
            <div className="video">
                <h1>Introduction to React.js</h1>
            </div>
            <aside>
                <Playlist chapters={this.props.chapters}/>
            </aside>
        </section>
    }
}

export default MediaPlayer