import React, { useState } from "react";
import { NewProduktFormRedux } from "./FormNewProdukt";


import ProduktComponent from './ProduktComponent'
import s from './ProduktTable.module.css'
import { RedakProduktFormRedux } from './FormProduktRedactors'



const ProduktTable = (props) => {


    let [editMode, setEditMode] = useState(false)



    const NewProduktCreatorForm = async (values) => {
        props.NewProduktCreator(values)

    }


    let ProduktItem = props.produkt.map((d) =>
        < ProduktComponent name={d.name} quantity={d.quantity} price={d.price} key={d.name} produkt={props.produkt}
            DeleteProdukt={props.DeleteProdukt}
            RedactorProdukt={props.RedactorProdukt}
            goToEditMode={() => { setEditMode(true) }}
            NewProduktCreator={props.NewProduktCreator} />);


    let total = 0

    props.produkt.map((item) => {
        return total = total + (item.quantity * item.price)

    })
    console.log('sum', total)

    return (
        <div className={s.container}>



            <div className={s.containerFlex}>
                <div>{ProduktItem}</div>
                <div className={s.form}>
                    <NewProduktFormRedux onSubmit={NewProduktCreatorForm} />
                </div>

            </div>



            <div className={s.summa}>
                Общая сумма всех товаров:{total}руб
            </div>


        </div>
    )

}
export default ProduktTable;