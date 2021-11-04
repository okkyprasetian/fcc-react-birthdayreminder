import List from "./List"

function Lists({ lists }) {
    return (
        <div className="lists">
            {lists !== [] && lists.map(list => (<List key={list.id} list={list} />))}
        </div>
    );
}

export default Lists;