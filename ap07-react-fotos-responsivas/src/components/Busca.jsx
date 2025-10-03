import React, { Component } from 'react'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import {InputIcon} from 'primereact/inputicon'
import {IconField} from 'primereact/iconfield'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    render() {
        return (
            <>
                <section className='flex flex-column'>
                    <IconField className='w-full' iconPosition='left'>
                        <InputIcon className='pi pi-search' />
                        <InputText className='w-full' placeholder='Buscar...' />
                    </IconField>
                    <Button className='mt-5' label='Procurar' />
                </section>
            </>
        )
    }
}
