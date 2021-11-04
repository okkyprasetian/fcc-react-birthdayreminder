import Button from "./Button"

function Footer({ onClearLists }) {
    return (
        <footer>
            <Button onClearLists={onClearLists} />
        </footer>
    );
}

export default Footer;