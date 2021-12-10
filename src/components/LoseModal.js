const LoseModal = ({loseModalRef, closeLoseModal}) => {
    return(
      <div className="w3-modal" ref={loseModalRef}>
        <div className="w3-modal-content">
          <div className="w3-container w3-teal">
          <span 
              onClick={closeLoseModal}
              className="w3-button w3-display-topright">&times;</span>
            <h2> Oh no... </h2>
          </div>
          <div className="w3-container">
            
              <p> You lose!</p>
          </div>
        </div>
      </div>
    )
}

export default LoseModal