const InstructionsModal = ({instructionsModalRef, closeInstructionsModal}) => {
    return(
      <div className="w3-modal" ref={instructionsModalRef}>
        <div className="w3-modal-content">
          <div className="w3-container w3-teal">
            <span onClick={closeInstructionsModal}
              className="w3-button w3-display-topright">&times;</span>
            <h2>Instructions</h2>
          </div>
          <div className="w3-container">
            <p>
            This application puts your memory to the test. 
            You are presented with multiple colors. 
            The colors get shuffled every-time they are clicked. 
            You CAN NOT click on any color more than once or else your score resets to zero. 
            The main objective is to get the highest score as possible.
            </p>
          </div>
        </div>
      </div>
    )
}

export default InstructionsModal