import { Field, reduxForm, reset } from "redux-form"
import React from 'react'
import s from './ProduktComponent.module.css'


const RedakProduktForm = (props) => {
    console.log('test', props.produkt)

    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.redaktirsFlex}>
                <div>
                    <Field
                        component={'input'}
                        placeholder='Название товара'
                        id='name'
                        type='text'
                        name='name'



                    />
                    <Field
                        component={'input'}
                        placeholder='Количество товара'
                        id='quantity'
                        type='text'
                        name='quantity'

                    />

                    <Field
                        component={'input'}
                        placeholder='Цена товара'
                        id='price'
                        type='text'
                        name='price' />

                </div>
                <button>Редактировать</button>
            </div>

        </form>
    )
}

export const RedakProduktFormRedux = reduxForm({ form: 'RegistrProdukt' })(RedakProduktForm)


