import React from 'react';

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
                <nav>
                    <ul>
                        <h5>Getting Started with React</h5>
                    </ul>
                </nav>
            </aside>
        </section>
    }
}

export default MediaPlayer