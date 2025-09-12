import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xl-3">
            <Pedido
              data="14/09/2025"
              icone="car"
              titulo="Carro"
              desc="Porshe Amarelo"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3">
            <Pedido
              data="20/07/2025"
              icone="house"
              titulo="Casa"
              desc="Casa Amarela"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3">
            <Pedido
              data="11/04/2025"
              icone="tractor"
              titulo="Trator"
              desc="Trator Amarelo"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xl-3">
            <Pedido
              data="30/01/2025"
              icone="computer"
              titulo="Computador"
              desc="Computador Amarelo"
            />
          </div>
        </div>
        <div className="row">
          <div className="d col-12">
            <Cartao cabecalho="Hipopotamos se alimentando">
              <Animal
                tipo="hippo"
                tamanho="4"
              />
              <i class="fa-solid fa-2x fa-seedling"></i>
              <Animal
                tipo="hippo"
                tamanho="4"
                espelhamento="flip-horizontal"
              />
            </Cartao>
          </div>
        </div>
      </div>
    </>
  )
}

export default App