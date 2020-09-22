const Playlist = props => {
    const chapters = props.chapters.map((chapter) => {
        return <Chapter title={chapter.title} items={chapter.items}/>
    });
    return chapters;

}

export const Chapter = props => {
    return <div className="chapter">
        <h3>{props.title}</h3>
        <div className="items">
            <ListItems items={props.items}/>
        </div>
    </div>
}

export const ListItems = (props) => {
    const items =  props.items.map(item => {
        return <li>
            <h5>{item.title}</h5>
            <p>{item.author}</p>
        </li>
    });
    return <ul>{items}</ul>
}
export default Playlist