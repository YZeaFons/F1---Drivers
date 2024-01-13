import axios from "axios"
import { ADD_DRIVER, GET_DETAIL, GET_DRIVERS } from "./actionType"
const endpoint = 'http://localhost:3001/F1/driver'

export const addDriver = (newDriver) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, newDriver)
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

export const getDetailDriver = (id) => {
    return {
        type: GET_DETAIL,
        payload: id
    }
}