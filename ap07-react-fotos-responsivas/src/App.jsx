import React from 'react'
import './App.css'
import Busca from './components/Busca'
import {createClient} from 'pexels'

class App extends React.Component {
  chavePexels = 'iUK2I4jiz2UXpWR0mK7E8AF9GVzlkGLA3RPMtZo57qN3nkvr9OwWWGR0'
  pexelsClient = null
  componentDidMount() {
    this.pexelsClient = createClient(this.chavePexels)
  }

  onBuscaRealizada = (inputText) => {
    this.pexelsClient.photos.search({
      query: inputText
    })
    .then((result) => console.log(result))
  }

  render() {
    return (
      <>
        <section className='grid border-1 justify-content-center border-400 border-round'>
          <section className='col-12'>
            <section className='flex justify-content-center mb-3'>
              <i className='pi pi-car mr-3'></i>
              <i className='pi pi-car mr-3'></i>
            </section>
          </section>
          <section className='col-12 flex justify-content-center'>
            <h1>Exibir uma lista de...</h1>
          </section>
          <section className='col-8'>
            <Busca onBuscaRealizada={this.onBuscaRealizada} />
          </section>
        </section>
      </>
    )
  }
}

export default App
