import axios from "axios"
import { ADD_DRIVER, GET_DETAIL, GET_DRIVERS, SEARCH_NAME } from "./actionType"
const endpoint = 'http://localhost:3001/F1/driver'
const URL = 'http://localhost:3001/F1/drivers/name'

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

export const searchByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}?name=${name}`)
            return dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}