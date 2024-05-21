import { useState } from "react"

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        // setIsEditing(!isEditing)   => when new state depends on your previous state value, NOT udpate state like this
        setIsEditing(isEditing => !isEditing) // automatically called by react to receive latest state value
    }
    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = isEditing ? <input type="text" required value={playerName} onChange={handlePlayerChange}></input> : <span className="player-name">{playerName}</span>
    let buttonInfo = isEditing ? <button onClick={handleEditClick}>Save</button> : <button onClick={handleEditClick}>Edit</button>
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            {buttonInfo}

        </li>
    )
}