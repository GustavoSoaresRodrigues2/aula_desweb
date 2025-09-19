import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const funcBOM = () => alert("Agradecemos o feedback!")
  const funcRUIM = () => alert("Iremos resolver a situação!")
  const feedBOM = "Pedido já chegou"
  const feedRUIM = "Pedido não chegou"
  const expressaoFeedback = (
    <Feedback 
      feedBOM={feedBOM} feedRUIM={feedRUIM}
      funcBOM={funcBOM} funcRUIM={funcRUIM}  
    />
  )
  const pedidos = [
    {
      data: "14/09/2025",
      icone: "car",
      titulo: "Carro",
      desc: "Porshe Amarelo"
    },
    {
      data: "20/07/2025",
      icone: "house",
      titulo: "Casa",
      desc: "Casa Amarela"
    }
    ,
    {
      data: "11/04/2025",
      icone: "tractor",
      titulo: "Trator",
      desc: "Trator Amarelo"
    }
    ,
    {
      data: "30/01/2025",
      icone: "computer",
      titulo: "Computador",
      desc: "Computador Amarelo"
    }
  ]

  return (
    <>
      <div className="row d-flex pt-5 gap-5 justify-content-center align-items-center">
        {
          pedidos.map(({data, icone, titulo, desc}) => {
            return (
              <>
              <div className="col-sm-12 col-md-6 col-xl-4">
                <Cartao cabecalho={data}>
                  <Pedido
                    icone={icone}
                    titulo={titulo}
                    desc={desc}
                  />
                  <div className="mt-3"></div>
                  {expressaoFeedback}
                </Cartao>  
              </div>
              </>
            )
          })
        }
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Cartao cabecalho="Hipopotamos se alimentando">
            <Animal
              tipo="hippo"
              tamanho="4"
              cor="info"
            />
            <i class="fa-solid fa-2x fa-seedling text-success"></i>
            <Animal
              tipo="hippo"
              tamanho="4"
              cor="warning"
              espelhamento="flip-horizontal"
            />
            <Feedback 
              feedBOM={"Bom"} feedRUIM={"Ruim"}
            />
          </Cartao>
        </div>
      </div>
    </>
  )
}

export default App