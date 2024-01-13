import { ADD_DRIVER, GET_DETAIL, GET_DRIVERS, REMOVE_DRIVER } from "./actionType";

const initialState = {
    allDrivers: [],
    myDrivers: [],
    myTeams: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                myDrivers: action.payload
            }
        case ADD_DRIVER:
            return {
                ...state,
                allDrivers: action.payload,
                myDrivers: action.payload
            }
        case REMOVE_DRIVER:
            return {
                ...state,
                allDrivers: action.payload,
                myDrivers: action.payload
            }
        case GET_DETAIL:
            const detailDriver = state.allDrivers.filter(item => item.id === action.payload)
            return {
                ...state,
                myDrivers: detailDriver
            }
        default:
            return { ...state };
    }
}
export default reducer
