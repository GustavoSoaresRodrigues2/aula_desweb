import "./styles.css"

const App = () => {
  const textoElemento = "Nome: "
  const funcPegarTextoBtn = () => "Enviar"
  const funcAparecerAlert = () => alert("Botao clicado!")
  return (
    <div className="div-um">
      <label htmlFor="nome" className="lab-nome">{textoElemento}</label>
      <input id="nome" className="input-nome" type="text" placeholder="Seu nome..." />
      <button id="" className="btn-enviar" onClick={() => funcAparecerAlert()}>
        {funcPegarTextoBtn()}
      </button>
    </div>

  )
}

export default App