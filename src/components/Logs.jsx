export default function Logs({ turns }) {
    return (
        <ol id="log">
            {turns.map((item, index) => <li key={`${item.square.row}-${item.square.col}`}>{item.player} selected {item.square.row},{item.square.col}</li>)}
        </ol>
    )

}