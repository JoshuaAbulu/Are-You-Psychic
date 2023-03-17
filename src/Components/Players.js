import {Link } from "react-router-dom";

const Players = () => {
    return ( 
        <>
        <div className="container">
            <h2 className="modeSelect">Select Mode:</h2>
                <div className="modes">
                    <Link to='/single-player-instructions'>
                        <button className="modeButton">
                             Single Player
                        </button>
                    </Link>

                    <Link to='/multi-player-instructions'>
                        <button className="modeButton">
                            Multi Player
                        </button>
                    </Link>
                </div>
                </div>
        </>
     );
}
 
export default Players;