import s from './ProduktComponent.module.css'

import React, { useState } from "react";

import { RedakProduktFormRedux } from './FormProduktRedactors'

const ProduktComponent = (props) => {

    let [editMode, setEditMode] = useState(false)

    const ProduktCreatorForm = async (values) => {
        props.RedactorProdukt(values)
        setEditMode(false)


    }
    console.log('testing', props.produkt)

    let towar = { name: props.name, quantity: props.quantity, price: props.price }

    console.log('testing!', towar)


    return (
        <div >
            {editMode
                ? <RedakProduktFormRedux initialValues={towar} produkt={props.produkt} onSubmit={ProduktCreatorForm} />
                : <div className={s.produktFlex}>
                    <span className={s.produkt}>
                        {props.name}
                    </span>
                    <span className={s.produkt}>
                        {props.quantity}шт.
        </span>
                    <span className={s.produkt}>
                        {props.price}руб.
        </span>
                    <button className={s.buttonComponentDelete} onClick={() => {
                        props.DeleteProdukt(props.name);
                    }}>
                        Удалить товар
        </button>
                    <button className={s.buttonComponentRedactors} onClick={async () => {
                        console.log('redactor', props.name)
                        setEditMode(true)
                    }}>
                        Редактировать товар
        </button>
                </div>

            }
        </div>
    )
}


export default ProduktComponent;


