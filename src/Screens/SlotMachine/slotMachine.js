import './slotMachine.css';

import React, {useState, useEffect} from 'react'



const SlotMachine = ({id, owned, close, expires}) => {

    const [spin, setSpin] = useState(false);
    const [ring1, setRing1] = useState();
    const [ring2, setRing2] = useState();
    const [ring3, setRing3] = useState();
    const [price, setPrice] = useState();
    const [input, setInput] = useState();
    const [realBet, setRealBet] = useState();
    const [jackpot, setJackpot] = useState(1);
    const [balance, setBalance] = useState(0);
    const [wonPrice, setWonPrice] = useState(0);
    const [cashbackPrice, setcashbackPrice] = useState(0);
    var count=0;

    useEffect(() => {
        win()
    }, [ring3])


 function row1() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🍓</div>
        <div className="ringEnd">🍇</div>
        <div className="ringEnd">🍊</div>
        <div className="ringEnd">🥭</div>
        </>
            )
    } else if (spin && ring1 == undefined) {
    return (
        <>
        <div className="ringMoving">🍓</div>
        <div className="ringMoving">🍇</div>
        <div className="ringMoving">🍊</div>
        <div className="ringMoving">🥭</div>
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 50 ) {
    return (
        <>
        <div className="ringEnd">🍓</div>
        <div className="ringEnd">🍇</div>
        <div className="ringEnd">🍊</div>
        <div className="ringEnd">🥭</div>
        </>
            )  
    } else if (ring1 > 50 && ring1 <= 75) {
        return (
            <>
            <div className="ringEnd">🍇</div>
            <div className="ringEnd">🍊</div>
            <div className="ringEnd">🥭</div>
            <div className="ringEnd">🍓</div>
            </>
                )  
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                <div className="ringEnd">🍊</div>
                <div className="ringEnd">🥭</div>
                <div className="ringEnd">🍓</div>
                <div className="ringEnd">🍇</div>
                </>
                    )  
            } else if (ring1 > 95 && ring1 <= 100) {
                return (
                    <>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    <div className="ringEnd">🍊</div>
                    </>
                        )  
                }
 }

 function row2() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🥭</div>
        <div className="ringEnd">🍓</div>
        <div className="ringEnd">🍇</div>
        <div className="ringEnd">🍊</div>
        </>
            )
    } else if (spin && ring2 == undefined) {
    return (
        <>
        <div className="ringMoving">🍓</div>
        <div className="ringMoving">🍇</div>
        <div className="ringMoving">🍊</div>
        <div className="ringMoving">🥭</div>
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 50 ) {
        return (
            <>
            <div className="ringEnd">🍓</div>
            <div className="ringEnd">🍇</div>
            <div className="ringEnd">🍊</div>
            <div className="ringEnd">🥭</div>
            </>
                )  
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                <div className="ringEnd">🍇</div>
                <div className="ringEnd">🍊</div>
                <div className="ringEnd">🥭</div>
                <div className="ringEnd">🍓</div>
                </>
                    )  
            } else if (ring2 > 75 && ring2 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    </>
                        )  
                } else if (ring2 > 95 && ring2 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🥭</div>
                        <div className="ringEnd">🍓</div>
                        <div className="ringEnd">🍇</div>
                        <div className="ringEnd">🍊</div>
                        </>
                            )  
                    }

 }

 function row3() {

    if (!spin) {
    return (
        <>
        <div className="ringEnd">🥭</div>
        <div className="ringEnd">🍓</div>
        <div className="ringEnd">🍇</div>
        <div className="ringEnd">🍊</div>
        </>
            )
    } else if (spin && ring3 == undefined) {
    return (
        <>
        <div className="ringMoving">🍓</div>
        <div className="ringMoving">🍇</div>
        <div className="ringMoving">🍊</div>
        <div className="ringMoving">🍋</div>
        <div className="ringMoving">🍍</div>
        <div className="ringMoving">🥭</div>
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 50 ) {
        return (
            <>
            <div className="ringEnd">🍓</div>
            <div className="ringEnd">🍇</div>
            <div className="ringEnd">🍊</div>
            <div className="ringEnd">🥭</div>
            </>
                )  
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                <div className="ringEnd">🍇</div>
                <div className="ringEnd">🍊</div>
                <div className="ringEnd">🥭</div>
                <div className="ringEnd">🍓</div>
                </>
                    )  
            } else if (ring3 > 75 && ring3 <= 95) {
                return (
                    <>
                    <div className="ringEnd">🍊</div>
                    <div className="ringEnd">🥭</div>
                    <div className="ringEnd">🍓</div>
                    <div className="ringEnd">🍇</div>
                    </>
                        )  
                } else if (ring3 > 95 && ring3 <= 100) {
                    return (
                        <>
                        <div className="ringEnd">🥭</div>
                        <div className="ringEnd">🍓</div>
                        <div className="ringEnd">🍇</div>
                        <div className="ringEnd">🍊</div>
                        </>
                            )  
                    }
     }

     function win() {
      if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
          setPrice(1)
      } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
          setPrice(2)
      } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
          setPrice(3)
      } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
          setPrice(4)
      } else {
          setPrice(0)
      } 
  }

 function rand() {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
      setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

function play() {
    if (ring3 > 1 || !spin){
    if (input >= 0.01){
    setRealBet(input);
    setSpin(true);
    setRing1();
    setRing2();
    setRing3();
    setcashbackPrice(((parseFloat(balance) + parseFloat(input))/2).toFixed(3));
    setBalance((parseFloat(balance) + parseFloat(input)).toFixed(3));
    setJackpot((parseFloat(jackpot) + (parseFloat(input) / 2)).toFixed(3));
    setTimeout(function(){   rand()    }, 2000);
} else {
    setPrice(10)
}

}
}


function win() {
    if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
        setPrice(1);
        count===0? setcashbackPrice(parseFloat(cashbackPrice).toFixed(3)) :  setcashbackPrice(parseFloat(cashbackPrice).toFixed(3) - parseFloat(realBet).toFixed(3));
        count===0? setWonPrice(parseFloat(wonPrice) + (parseFloat(realBet) * 1.5).toFixed(3)) :        setWonPrice(parseFloat(wonPrice) + ((parseFloat(realBet) * 1.5).toFixed(3) - parseFloat(realBet).toFixed(3)));
        count++;
        //setBalance(balance + (balance * 15))
    } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 != undefined) {
        setPrice(2);
        count===0? setcashbackPrice(parseFloat(cashbackPrice).toFixed(3)) :  setcashbackPrice(parseFloat(cashbackPrice).toFixed(3) - parseFloat(realBet).toFixed(3));
        count===0? setWonPrice(parseFloat(wonPrice) + (parseFloat(realBet) * 2).toFixed(3)) :        setWonPrice(parseFloat(wonPrice) + ((parseFloat(realBet) * 2).toFixed(3) - parseFloat(realBet).toFixed(3)));
        count++;
  //      setWonPrice((parseFloat(realBet) * 2).toFixed(3) - parseFloat(realBet).toFixed(3));
        //setBalance(balance + (balance * 20))
    } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 != undefined) {
        setPrice(3);
        count===0? setcashbackPrice( parseFloat(cashbackPrice).toFixed(3)) :  setcashbackPrice((parseFloat(cashbackPrice).toFixed(3) - parseFloat(realBet).toFixed(3)));
        count===0? setWonPrice(parseFloat(wonPrice) + (parseFloat(realBet) * 2.5).toFixed(3)) :        setWonPrice(parseFloat(wonPrice) +((parseFloat(realBet) * 2.5).toFixed(3) - parseFloat(realBet).toFixed(3)));
        count++;
//        setWonPrice((parseFloat(realBet) * 2.5) - parseFloat(realBet).toFixed(3));
        //setBalance(balance + (balance * 25))
    } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 != undefined) {
        setPrice(4)
        setWonPrice(parseFloat(wonPrice) + parseFloat(jackpot));
        //setBalance(balance + jackpot)
        setJackpot(0)
        setcashbackPrice(0)
    } else {
        setPrice(0)
    } 
}

function premio() {
    if (price === 1 && ring3 > 1) {
        return (
        <p className="priceInd">{"🍇 x1.5 You've won " + (parseFloat(realBet) * 1.5).toFixed(3) + " Sol.!"}</p>
        )
    } else if (price === 2 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍊 x2 You've won " + (parseFloat(realBet) * 2).toFixed(3) + " Sol.!"}</p>
            )
    } else if (price === 3 && ring3 > 1) {
        return (
            <p className="priceInd">{"🥭 X25 You've won " + (parseFloat(realBet) * 2.5).toFixed(3) + " Sol.!"}</p>
            )
    } else if (price === 4 && ring3 > 1) {
        return (
            <p className="priceInd">{"🍓 Jackpot! You've won: " + (jackpot) + " Sol.!"}</p>
            )
    } else if (price === 0 && ring3 > 1) {
        return (
            <p className="priceInd">😧 ¡So close! But no luck...</p>
            )
    } else if (price === 10) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Not enough funds</span> </p>
            )
}
}

function numChecker(e) {
    const value = e.target.value;
    //const regex = /^[0-9]+$/;
    const regex = /^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/;
    if (value.match(regex) && parseInt(value) >= 0 || value === "") {
        setInput(value);
    }
}


function withdraw(){
    console.log('Withdraw Sol to others wallet and set everything to 0');
    try {
        //call withdraw function..
    setBalance(0);
    setInput(0);
    setPrice(0);
    setWonPrice(0);
    setcashbackPrice(0);
    setRealBet(0);
    setJackpot(1);
    count=0;
    } catch (error) {
        console.log(error);
    }
}





    return (
        <div className="fullSlot">
            <h1 className="casinoName">SWEET SOL</h1>
            <h1 className="price">{"Jackpot: " + jackpot + " Sol."}</h1>
            <div className="slot">
                <div className="row">
                    {row1()}
                </div>
                <div className="row">
                    {row2()}
                </div>
                <div className="row">
                    {row3()}
                </div>
            </div>
            <h1 className="price">
                {premio()}
            </h1>
            <div className="slotFoot">
                <input value={input} type="number" onChange={(e) => numChecker(e)} className="betInput" placeholder="0 Sol"></input>
                <button className="spinButton" onClick={() => play()}>Spin</button>
            </div>
            {/* <h1 className="price">{"Cash Spent: " + Math.round((balance * 100)) / 100 + " Sol."}</h1> */}
            <h1 className="price">{"Cash Spent: " + balance + " Sol."}</h1>
            <h1 className="price">{"Cash Back: " + cashbackPrice + "  Sol."}</h1>
            <h1 className="price">{"Winnings: " + (parseFloat(wonPrice)+ parseFloat(cashbackPrice)) + "  Sol."}</h1>
            <button onClick={() => withdraw()} className="buyMoreButton">Withdraw</button>
        </div>

    )
}

export default SlotMachine;
