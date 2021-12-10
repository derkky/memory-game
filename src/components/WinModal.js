const WinModal = ({winModalRef, closeWinModal}) => {
    return(
      <div className="w3-modal" ref={winModalRef}>
        <div className="w3-modal-content">

          <div className="w3-container w3-teal">
            <h2> Congratulations </h2>
          </div>

          <div className="w3-container">
            <p> You win!</p>
            <br/>
          </div>

          <div className="w3-display-container w3-teal">
            <span 
              onClick={closeWinModal}
              className="w3-button w3-display-bottommiddle">Next Level</span>
          </div>
        </div>
      </div>
    )
}

export default WinModal