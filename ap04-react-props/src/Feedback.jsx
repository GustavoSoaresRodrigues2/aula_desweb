const Feedback = ({feedBOM, feedRUIM, funcBOM, funcRUIM}) => {
  return (
    <>
        <div className="d-flex justify-content-evenly">
            <button type="button" className="btn btn-success" onClick={funcBOM}>
                {feedBOM}
            </button>
            <button type="button" className="btn btn-danger" onClick={funcRUIM}>
                {feedRUIM}
            </button>
        </div>
    </>
  )
}

export default Feedback