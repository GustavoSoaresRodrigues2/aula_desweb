import React, { useState, Component } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputIcon } from 'primereact/inputicon'
import { IconField } from 'primereact/iconfield'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <>
                <form action="" onSubmit={this.onFormSubmit}>
                    <section className='flex flex-column'>
                        <IconField className='w-full' iconPosition='left'>
                            <InputIcon className='pi pi-search' />
                            <InputText className='w-full' 
                                placeholder={this.props.dica}
                                onChange={this.onTermoAlterado} 
                                value={this.state.termoDeBusca}
                            />
                        </IconField>
                        <Button className='mt-5' label='Aparecer Imagens'
                            onClick={this.onTermoAlterado}
                        />
                    </section>
                </form>

            </>
        )
    }
}

Busca.defaultProps = {
    dica: 'Buscar...'
}