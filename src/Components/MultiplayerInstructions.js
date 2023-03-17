import { Link } from "react-router-dom";

const MultiplayerInstructions = () => {
    return ( 
        <>
        <div className="container">
                <h1 className="player-heading">WELCOME TO ARE YOU PSYCHIC MULTIPLAYER MODE!!</h1>
                <h3 className="player-instructions">
                    Instructions!
                    <br />
                    In this mode, computer will generate a random number between 1 and x. You have limited attempts to try to guess what number was generated. If you guess right, you move on to the next level, and the range of numbers to guess from increases. If your number of attempts get to 0, you lose.
                    <br />
                    You can select the number of players, and the number of tries each player has at the start. The winner is the last man standing!
                    <br />
                    MAY THE ODDS BE IN YOUR FAVOUR!
                    <br />
                    Click the button below to proceed.
                </h3>
                <Link to='/multi-player'>
                        <button className="proceed">
                             Proceed
                        </button>
                    </Link>
            </div>
        </>
     );
}
 
export default MultiplayerInstructions;