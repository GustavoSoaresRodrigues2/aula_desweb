const Pedido = ({ data, icone, titulo, desc }) => {
    return (
        <>
            <div className="d-flex">
                <div className="d-flex align-items-center">
                    <i className={`fa-solid fa-${icone} fa-2x`}></i>
                </div>
                <div className="ms-3 flex-grow-1">
                    <h4 className="text-center">{titulo}</h4>
                    <p className="text-center">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Pedido