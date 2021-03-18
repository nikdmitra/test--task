import { connect } from "react-redux";
import ProduktTable from './ProduktTable'
import React from 'react'
import {NewProduktCreator, DeleteProdukt,RedactorProdukt} from '../redux/Produkt-reduser'


const ProduktTableContainer = (props) => {
    console.log('тест',props.produkt)




    return (
    <ProduktTable 
        produkt={props.produkt} 
        NewProduktCreator={props.NewProduktCreator}
        DeleteProdukt={props.DeleteProdukt}
        RedactorProdukt={props.RedactorProdukt}
        />
    )
}






let mapStateToProps = (state) => {
    
    return {
      
        produkt: state.produktInfo.produkt
      



    }
}



export default connect(
    mapStateToProps, {
        NewProduktCreator,DeleteProdukt,RedactorProdukt
})
    (ProduktTableContainer)