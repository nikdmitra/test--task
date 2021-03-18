const NEW_PRODUKT = 'NEW_PRODUKT'
const DELETE_PRODUKT = 'DELETE_PRODUKT'
const REDACTOR_PRODUKT = 'REDACTOR_PRODUKT'


let initialState = {
    produkt: [
        { name: 'Хлеб', quantity: 10, price: 100 },
        { name: 'Масло', quantity: 20, price: 300 },
        { name: 'Мясо', quantity: 5, price: 500 },
    ]


};







const ProduktReduser = (state = initialState, action) => {
    switch (action.type) {

        case NEW_PRODUKT:


            {
                return {
                    ...state,
                    produkt: [...state.produkt, action.newProdukt]


                };
            }

        case DELETE_PRODUKT:
            {
                return {
                    ...state,
                    produkt: [...state.produkt.filter(el => el.name !== action.name)]


                };
            }

        case REDACTOR_PRODUKT:
            {
                return {
                    ...state,
                    produkt: state.produkt.map(towar => (towar.name === action.produkt.name) ? action.produkt : towar)


                };
            }











        default:
            return state;
    }
}


export const NewProduktCreator = (newProdukt) => ({ type: NEW_PRODUKT, newProdukt })

export const DeleteProdukt = (name) => ({ type: DELETE_PRODUKT, name })


export const RedactorProdukt = (produkt) => ({ type: REDACTOR_PRODUKT, produkt })





export default ProduktReduser;