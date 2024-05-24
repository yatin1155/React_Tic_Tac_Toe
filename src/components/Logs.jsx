export default function Logs({ turns, playerInfo }) {
    return (
        <ol id="log">
            {turns.map((item, index) => <li key={`${item.square.row}-${item.square.col}`}>{playerInfo[item.player]} selected {item.square.row},{item.square.col}</li>)}
        </ol>
    )

}