export default function ParagraphText(props) {
    const text = props.text;
    return (
        <p className={props.className}>{text}</p>
    );
}
