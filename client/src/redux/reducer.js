import { ADD_DRIVER, GET_DETAIL, GET_DRIVERS, GET_ORIGIN, PREVIOUS_STATE, REMOVE_DRIVER, SEARCH_NAME } from "./actionType";

const initialState = {
    allDrivers: [],
    myDrivers: [],
    previousDriver: [],
    myTeams: [],
    origins: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                myDrivers: action.payload,
                previousDriver: action.payload
            }
        case ADD_DRIVER:
            return {
                ...state,
                allDrivers: action.payload,
                myDrivers: action.payload,
                previousDriver: action.payload
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
        case PREVIOUS_STATE:
            return {
                ...state,
                myDrivers: state.previousDriver
            }
        case SEARCH_NAME:
            return {
                ...state,
                myDrivers: action.payload,
                previousDriver: action.payload
            }
        case GET_ORIGIN:
            let allOrigins = state.allDrivers.filter(item => item.source)
            return {
                ...state,
                origins: allOrigins
            }
        default:
            return { ...state };
    }
}
export default reducer
