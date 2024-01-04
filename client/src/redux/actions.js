import axios from "axios"
import { ADD_DRIVER } from "./actionType"

export const addDriver = (newDriver) => {
    const endpoint = 'http://localhost:3001/F1/driver'
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, newDriver)
            console.log(data);
            return dispatch({
                type: ADD_DRIVER,
                payload: data
            })

        } catch (error) {
            alert(error.message)
        }


    }
}