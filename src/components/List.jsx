function List({ list }) {
    return (
        <div className="list">
            <img className="profilepic" src={list.img} alt="" />
            <h4>{list.name}</h4>
            <p>{list.age}</p>
        </div>
    );
}

export default List;