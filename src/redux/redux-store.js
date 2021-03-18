import { applyMiddleware, combineReducers, createStore } from "redux";
import ProduktReduser from './Produkt-reduser'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
const ACC_DELL = 'ACC_DELL'

let reducers = combineReducers({

    produktInfo: ProduktReduser,

    form: formReducer.plugin({
        newProdukt: (state, action) => {
            switch (action.type) {
                case ACC_DELL:

                    return undefined;

                default:
                    return state
            }
        }
    })


})

let store = createStore(reducers)


export default store