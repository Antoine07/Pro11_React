import {
    LOADING
 } from "../constants/actions";

export const load_school_data = payload => {
    return {
        type: LOADING, payload
    };
}