import React, { useState, useRef } from "react"
import "./components/styles/styles.css"
import shuffleArray from "./components/utils/shuffleArray"
import generateRandomCards from "./components/utils/randomCardGenerator"
import CardContainer from "./components/CardsContainer"
import LoseModal from "./components/LoseModal"
import WinModal from "./components/WinModal"
import Header from "./components/Header"
import InstructionsModal from "./components/InstructionsModal"

function App() {
  const [score, setScore] = useState(0)

  const [bestScore, setBestScore] = useState(0)

  const [cards, setCards] = useState(generateRandomCards(4))

  const [clickedCards, setClickedCards] = useState([])

  const incrementScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const advanceLevel = () => {
    setCards(generateRandomCards(cards.length + 1))
    resetScore()
    emptyClickedCards()
  }

  const addCardToClicked = (ev) => {
    setClickedCards(
      [...clickedCards, ev.target.id]
    )
  }

  const emptyClickedCards = () => {
    setClickedCards([])
  }

  const shuffleCards = () => {
    const shuffledCards = shuffleArray(cards)
    setCards(shuffledCards)
  }

  const handleClick = (ev) => {
    if (clickedCards.includes(ev.target.id)) {
      resetScore()
      openLoseModal()
      emptyClickedCards()
      shuffleCards()
    } else {
      incrementScore()
      shuffleCards()
      addCardToClicked(ev)
    }
    
  }

  React.useEffect(() => {
    const updateBestScore = (newScore) => {
      setBestScore(
        (newScore > bestScore) ? newScore : bestScore
      )
    }

    updateBestScore(score)
  }, [score, bestScore])

  React.useEffect(() => {
    if (score === cards.length){
      openWinModal()
    }
  }, [score, cards])

  const loseModalRef = useRef()
  const closeLoseModal = () => {
    loseModalRef.current.style.display = "none"
  }
  const openLoseModal = () => {
    loseModalRef.current.style.display = "block"
  }

  const winModalRef = useRef()
  const closeWinModal = () => {
    winModalRef.current.style.display = "none"
    advanceLevel()
  }
  const openWinModal = () => {
    winModalRef.current.style.display = "block"
  }

  const instructionsModalRef = useRef()
  const closeInstructionsModal = () => {
    instructionsModalRef.current.style.display = "none"
  }
  const openInstructionsModal = () => {
    instructionsModalRef.current.style.display = "block"
  }

  return (
    <div className="App">
      <Header openInstructionsModal={openInstructionsModal} score={score} bestScore={bestScore}/>

      <InstructionsModal instructionsModalRef={instructionsModalRef} closeInstructionsModal={closeInstructionsModal} />

      <CardContainer cards={cards} handleClick={handleClick}/>

      <LoseModal loseModalRef={loseModalRef} closeLoseModal={closeLoseModal} />

      <WinModal winModalRef={winModalRef} closeWinModal={closeWinModal} />
      
    </div>
  );
}

export default App;
