const Playlist = props => {
    const chapters = [];
    for (let chapter in props.chapters) {
        chapters.push(<Chapter title={chapter} items={props.chapters[chapter]}/>)
    }
    return chapters;
}

const Chapter = props => {
    return <div>
        <h5>props.title</h5>
        <div className="items">
            <ListItems items={props.items}/>
        </div>
    </div>
}

const ListItem = props => {
    const items = props.items.map(item => {
        return <li>
            <h5>{props.title}</h5>
            <p>{props.author}</p>
        </li>
    });
    return <ul>{items}</ul>;
}
export default Playlist