function List({ list }) {
    return (
        <div className="list">
            <div>
                <img className="profilepic" src={list.img} alt="" />
            </div>
            <div className="profile">
                <h4>{list.name}</h4>
                <p>{list.age} years</p>
            </div>
        </div>
    );
}

export default List;