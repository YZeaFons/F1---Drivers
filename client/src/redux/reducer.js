import { ADD_DRIVER, FILTER_ORIGIN, FILTER_TEAM, GET_DETAIL, GET_DRIVERS, GET_ORIGIN, GET_TEAMS, ORDER_ALF, ORDER_DOB, PREVIOUS_STATE, REMOVE_DRIVER, SEARCH_NAME, SEARCH_REPEAT } from "./actionType";

const initialState = {
    allDrivers: [],
    myDrivers: [],
    previousDriver: [],
    myTeams: [],
    origins: [],
    repeatDrivers: []
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

        case GET_TEAMS:
            return {
                ...state,
                myTeams: action.payload
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

        case FILTER_ORIGIN:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myDrivers: state.previousDriver
                }
            }
            const originFiltered = state.myDrivers.filter(item => item.source === action.payload)
            return {
                ...state,
                myDrivers: originFiltered
            }

        case FILTER_TEAM:
            if (action.payload === 'All') {
                return {
                    ...state,
                    myDrivers: state.previousDriver
                }
            }
            const teamsFiltered = state.myDrivers.filter(item => item.teams?.includes(action.payload))
            return {
                ...state,
                myDrivers: teamsFiltered
            }

        case ORDER_DOB:
            const orderTemp = [...state.myDrivers]
            if (action.payload === 'Mayor a Menor') orderTemp.sort((a, b) => Number(a.numberBirthday) - Number(b.numberBirthday))
            if (action.payload === 'Menor a Mayor') orderTemp.sort((a, b) => Number(b.numberBirthday) - Number(a.numberBirthday))
            return {
                ...state,
                myDrivers: orderTemp
            }

        case ORDER_ALF:
            const orderTempAlf = [...state.myDrivers]
            if (action.payload === 'A-Z') {
                orderTempAlf.sort((a, b) => {
                    if (a.forename.toLowerCase() > b.forename.toLowerCase()) return 1
                    if (b.forename.toLowerCase() > a.forename.toLowerCase()) return -1
                    return 0
                })
            }
            if (action.payload === 'Z-A') {
                orderTempAlf.sort((a, b) => {
                    console.log(a.forename);
                    if (a.forename.toLowerCase() > b.forename.toLowerCase()) return -1
                    if (b.forename.toLowerCase() > a.forename.toLowerCase()) return 1
                    return 0
                })
            }
            return {
                ...state,
                myDrivers: orderTempAlf
            }
        // case SEARCH_REPEAT:

        //     const filterName = state.allDrivers.filter(item => item.forename.toLowerCase() === action.payload[0].toLowerCase())
        //     const filterSurname = filterName?.filter(item => item.surename.toLowerCase() === action.payload[1].toLowerCase())
        //     return {
        //         ...state,
        //         repeatDrivers: [],
        //         repeatDrivers: filterSurname

        //     }

        default:
            return { ...state };
    }
}
export default reducer
