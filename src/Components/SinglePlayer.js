import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SinglePlayer = () => {

    let a = 5
    // let limit = 5
    // let tries = Math.round(limit/2)
    const [level, setLevel] = useState(1)
    const [limit, setLimit] = useState(5)
    const [tries, setTries] = useState(3)
    const [show, setShow] = useState(false)
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * a) + 1)
    const newRandomNumber = () => {
            // setRandomNumber(Math.floor(Math.random() * 5) + 1)
            if (value == randomNumber) {
                setVerdict('Correct')
            }
            else {
                setTries(tries-1)
                // tries = tries - 1
                setVerdict('Incorrect')
            }
            if (tries == 1 && value != randomNumber) {
                alert("Don't worry. You're not psychic!")
                setShow(true)
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
    const valid = () => {
        return(
        verdict == 'Correct'
        )
    }
    const alive = () => {
        return(
            tries != 0
        )
    }

    useEffect(() => {
        console.log(randomNumber)
        console.log(tries);
        console.log(limit);
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
   }


    return ( 
        <>
        <div className="container" id="player-game">
            {/* <Link to='/'>
                <button className="home-button">
                    Home
                </button>
            </Link> */}
            <h1 className="level">LEVEL {level}!</h1>
            <h3 className="guess">Guess a number between 1 and {limit}</h3>
            <input type='number' className='guess-input' value={value} onChange={(e) => setValue(e.target.value)} disabled={!alive()}/>
            <button className="guess-button" onClick={newRandomNumber} disabled={!alive()}>Guess</button>
            <p className="guess-tries">Tries: You have {tries} left!</p>
            <p className="guess-verdict">{verdict}</p>
            <button className="next-stage" disabled = {!valid()} onClick={NextStage}>Next Stage</button>
            <br />
            {show && (
                <div>
                    <Link to='/'>
                        <button className="guess-over">
                             Return to Home
                        </button>
                    </Link>
                    <Link to='/single-player-instructions'>
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
 
export default SinglePlayer;