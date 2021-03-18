import { Field, reduxForm } from "redux-form"
import React from 'react'
import s from './ProduktComponent.module.css'

const NewProduktForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}  >

            <div >

                <Field className={s.formNewProdukt}
                    component={'input'}
                    placeholder='Название товара'
                    id='name'
                    type='text'
                    name='name'


                />
                <Field className={s.formNewProdukt}
                    component={'input'}
                    placeholder='Количество товара'
                    id='quantity'
                    type='text'
                    name='quantity' />

                <Field className={s.formNewProdukt}
                    component={'input'}
                    placeholder='Цена товара'
                    id='price'
                    type='text'
                    name='price' />
                <button className={s.buttonComponentCreator}>Добавить товар</button>

            </div>



        </form>
    )
}



export const NewProduktFormRedux = reduxForm({ form: 'newProdukt' })(NewProduktForm)


