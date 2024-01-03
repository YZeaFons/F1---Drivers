import { ADD_DRIVER, REMOVE_DRIVER } from "./actionType";

const initialState = {
    myDrivers: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DRIVER':
            return {
                ...state,
                myDrivers: action.payload
            }
        case 'REMOVE_DRIVER':
            return {
                ...state,
                myDrivers: action.payload
            }
        default:
            return { ...state };
    }
}
export default reducer