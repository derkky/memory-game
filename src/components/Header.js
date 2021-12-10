const Header = ({openInstructionsModal, score, bestScore}) => {
    return(
      <header className="w3-teal">
        <div>
          <span className="w3-button w3-white" onClick={openInstructionsModal}> Instructions </span>
          <h1> Memory Game </h1>
          <div className="scoreboard">
            <span> Score = {score} </span>
            <span> Best Score = {bestScore} </span>
          </div>
         
        </div>
      </header>
    )
}

export default Header