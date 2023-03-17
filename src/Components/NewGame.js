import {Link } from "react-router-dom";

const NewGame = () => {
    return (
        <>
        <div className="container">
            <h1 className="new-game-heading">ARE YOU PSYCHIC?</h1>
            <br />
            <Link to='/players'>
                <button className="newGameButton">
                    New Game
                </button>
            </Link>
            </div>
        </>
     );
}
 
export default NewGame;