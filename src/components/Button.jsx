function Button({ onClearLists }) {
    return (
        <button onClick={onClearLists}>
            <h3>Clear All</h3>
        </button>
    );
}

export default Button;