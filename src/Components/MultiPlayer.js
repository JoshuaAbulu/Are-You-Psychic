import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MultiPlayer = () => {

    const [numOfPlayers, setNumOfPlayers] = useState('')
    const [numOfTries, setNumOfTries] = useState('')
    let a = 5
    const [show2, setShow2] = useState(true)
    const [show3, setShow3] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [playerTurn, setPlayerTurn] = useState(1)
    const [nextPlayer, setNextPlayer] = useState('')
    const [updatedNumberOfTries, setUpdatedNumberOfTries] = useState('')
    const [eachTry, setEachTry] = useState([])
    let i
    let j
    const [eachPlayer, setEachPlayer] = useState([])
    // let limit = 5
    // let tries = Math.round(limit/2)
    const [level, setLevel] = useState(1)
    const [limit, setLimit] = useState(5)
    const [tries, setTries] = useState(3)
    const [show, setShow] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * a) + 1)
    const newRandomNumber = () => {
            // setRandomNumber(Math.floor(Math.random() * 5) + 1)
            if (value == randomNumber) {
                setVerdict('Correct. Pass it to the next player')
                // setNextPlayer('Next Player')
            }
            else {
                // setUpdatedNumberOfTries(updatedNumberOfTries - 1)
                setEachTry(eachTry => {
                    const newEachTry = [...eachTry];
                    newEachTry[playerTurn-1] = eachTry[playerTurn-1] - 1;
                    return newEachTry;
                });
                // setNumOfTries(numOfTries-1)
                // tries = tries - 1
                setVerdict('Incorrect')
            }
            if (eachTry[playerTurn-1] == 1 && value != randomNumber) {
                alert("Don't worry. You're not psychic!")
                // setShow(true)
                // setEachPlayer(eachPlayer => {
                //     const newEachPlayer = [...eachPlayer];
                //     newEachPlayer.splice(playerTurn-1, 1)
                //     return newEachPlayer;
                // });
                // setEachTry(eachTry => {
                //     const newEachTry = [...eachTry];
                //     newEachTry.splice(playerTurn-1, 1)
                //     return newEachTry;
                // });
                // setNumOfPlayers(numOfPlayers-1)
                //     if (eachPlayer.length == 1){
                //         console.log('WINNER IS:');
                //     }
            }
    }
    // useEffect(() => {
    //     const randomNumber = Math.floor(Math.random() * 5) + 1;
    // }, [level])
    // const randomNumber = Math.floor(Math.random() * 5) + 1;
    const [value, setValue] = useState('')
    const [verdict, setVerdict] = useState('')
    // const buttonClick = () => {
    //     value == randomNumber ? setVerdict('correct') : setVerdict('incorrect')
    //     if (value == randomNumber) {
    //         setVerdict('correct')
    //     }
    // }
    

    useEffect(() => {
        console.log('random number = ' + randomNumber)
        // console.log('tries = ' + tries);
        console.log('limit = ' + limit);
        console.log('num of players left = ' + eachPlayer.length);
    }, [randomNumber, tries])

   const NextStage = () => {
    setValue('')
    setLevel(level + 1)
    setVerdict('')
    // setLimit(limit + 2)
    // setTries(Math.round(limit/2))
    setLimit(limit => {
        const newLimit = limit + 2;
        setTries(Math.round(newLimit/2));
        setRandomNumber(Math.floor(Math.random() * newLimit) + 1);
        return newLimit;
    });
    // setRandomNumber(Math.floor(Math.random() * a) + 1)
    // setRandomNumber(a => {
    //     const newA = a + 2
    //     return (Math.floor(Math.random() * newA) + 1)
    // })
    setPlayerTurn(1)
    if (eachTry[playerTurn-1] == 0){
        setEachPlayer(eachPlayer => {
            const newEachPlayer = [...eachPlayer];
            newEachPlayer.splice(playerTurn-1, 1)
            return newEachPlayer;
        });
        setEachTry(eachTry => {
            const newEachTry = [...eachTry];
            newEachTry.splice(playerTurn-1, 1)
            return newEachTry;
        });
        setNumOfPlayers(numOfPlayers-1)
}
if (eachPlayer.length == 2 && verdict == 'Incorrect') {
    alert('GAME OVER!')
    setGameOver(true)
    setShow3(false)
}
    console.log(eachPlayer.length);
   }
   const selected = () => {
    return(
        numOfPlayers > 1 &&
        numOfTries
    )
   }

   const changePlayers = (e) => {
    setNumOfPlayers(numOfPlayers => {
        const newPlayers = e.target.value
        if(newPlayers < 2) 
             {setErrorMessage('Select More Than 1 Player')}
         else setErrorMessage('')
         for (j=0; j<newPlayers; j++){
            eachPlayer[j] = j+1
        };
         return newPlayers
    }
    )
   }
   const changeTries = (e) => {
    setNumOfTries(numOfTries => {
        const newTries = e.target.value
        setUpdatedNumberOfTries(newTries)
        for (i=0; i<numOfPlayers; i++){
            eachTry[i] = newTries
        };
        return newTries
    })
   }

   const goToNextPlayer = () => {
    if(eachTry[playerTurn-1] != 0){
    setPlayerTurn(playerTurn => {
        const newPlayerTurn = playerTurn + 1
        
        return newPlayerTurn
    })}
    setRandomNumber(Math.floor(Math.random() * limit) + 1)
    setVerdict('')
    // setNextPlayer('')
    setValue('')
    if (eachTry[playerTurn-1] == 0){
                setEachPlayer(eachPlayer => {
                    const newEachPlayer = [...eachPlayer];
                    newEachPlayer.splice(playerTurn-1, 1)
                    return newEachPlayer;
                });
                setEachTry(eachTry => {
                    const newEachTry = [...eachTry];
                    newEachTry.splice(playerTurn-1, 1)
                    return newEachTry;
                });
                setNumOfPlayers(numOfPlayers-1)
    }
    if (eachPlayer.length == 2 && verdict == 'Incorrect') {
        alert('GAME OVER!')
        setGameOver(true)
        setShow3(false)
    }
    console.log(eachTry);
   }

   const disable = () => {
    return (
    (verdict == 'Correct. Pass it to the next player' &&
    playerTurn != numOfPlayers) ||
    (eachTry[playerTurn-1] == 0 &&
        playerTurn != numOfPlayers)
    )
   }
   const valid = () => {
    return(
    (verdict == 'Correct. Pass it to the next player' &&
    playerTurn == numOfPlayers) ||
    (eachTry[playerTurn-1] == 0 &&
        playerTurn == numOfPlayers)
    )
}
const alive = () => {
    return(
        eachTry[playerTurn - 1] != 0
    )
}

    return ( 
        <>
        <div className="container" id="player-game">
            {/* <Link to='/'>
                <button>
                    Home
                </button>
            </Link> */}
            {show2 && (<div>
                <label className="player-label" htmlFor="players">How many players?</label> <br />
                <input className="player-input" type="number" min='2' id="players" value={numOfPlayers} onChange={changePlayers}/> <p>{errorMessage}</p>
                <br />
                <label className="player-label" htmlFor="tries">How many tries for each player?</label> <br />
                <input className="player-input" type="number" id="tries" value={numOfTries} onChange={changeTries}/> <br />
                <button className="proceed" onClick={() => {setShow2(false); setShow3(true)}} disabled = {!selected()}>Continue</button>
            </div>
            )}

            {show3 && (<div>
            <h1 className="level">LEVEL {level}!</h1>
            <h2 className="player-turn">PLAYER {eachPlayer[playerTurn-1]}</h2>
            <h3 className="guess">Guess a number between 1 and {limit}</h3>
            <input className="guess-input" type='number' value={value} onChange={(e) => setValue(e.target.value)} disabled={!alive()}/>
            <button className="guess-button" onClick={newRandomNumber} disabled={!alive()}>Guess</button>
            <p className="guess-tries">Tries: You have {eachTry[playerTurn-1]} left!</p>
            <p className="guess-verdict">{verdict}</p>
            <button className="next-stage" onClick={goToNextPlayer} disabled = {!disable()}>Next Player</button> <br />
            <button className="next-stage" disabled = {!valid()} onClick={NextStage}>Next Stage</button>
            <br />
            {show && (
                <div>
                    <Link to='/'>
                        <button className="guess-over">
                             Return to Home
                        </button>
                    </Link>
                    <Link to='/multi-player-instructions'>
                        <button className="guess-over">
                             Play Again
                        </button>
                    </Link>
                </div>
            )}
            </div>
            )}

            {gameOver && (
                <div>
                    <h1 className="winner">THE WINNER IS: PLAYER {eachPlayer[0]}</h1>
                    <Link to='/'>
                        <button className="guess-over">
                             Return to Home
                        </button>
                    </Link>
                    <Link to='/multi-player-instructions'>
                        <button className="guess-over">
                             Play Again
                        </button>
                    </Link>
                </div>
            )}
            </div>
        </>
     );
}
 
export default MultiPlayer;