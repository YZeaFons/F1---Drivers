import axios from "axios"
import { ADD_DRIVER, FILTER_ORIGIN, FILTER_TEAM, GET_DETAIL, GET_DRIVERS, GET_TEAMS, ORDER_ALF, ORDER_DOB, PREVIOUS_STATE, SEARCH_NAME } from "./actionType"
const endpoint = '/F1/driver'
const URL = '/F1/drivers/name'
const endpointTeams = '/F1/teams'

export const addDriver = (newDriver) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, newDriver)
            if (data.error) throw new Error(data.error)
            window.alert("Su driver fue creado correctamente");
            return dispatch({
                type: ADD_DRIVER,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: GET_DRIVERS,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getAllTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpointTeams)
            return dispatch({
                type: GET_TEAMS,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getDetailDriver = (id) => {
    return {
        type: GET_DETAIL,
        payload: id
    }
}

export const searchByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}?name=${name}`)
            if (data.error) return data.error
            return dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const previousState = () => {
    return {
        type: PREVIOUS_STATE,
    }
}

export const filterByOrigin = (origin) => {
    return {
        type: FILTER_ORIGIN,
        payload: origin
    }
}

export const filterByTeam = (team) => {
    return {
        type: FILTER_TEAM,
        payload: team
    }
}

export const orderAlfabet = (order) => {
    return {
        type: ORDER_ALF,
        payload: order
    }
}

export const orderByDOB = (date) => {
    return {
        type: ORDER_DOB,
        payload: date
    }
}