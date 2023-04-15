import axios from "axios";
import { ActionTypes } from "../constants/actionTypes"

export const getDataStart = () => ({
    type: ActionTypes.GET_DATA_START,
    payload: true
});

export const getAnswer = (promt) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/chat/completions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${promt}"}]}`
    };

    const res = await axios.request(options);
    dispatch({
        type: ActionTypes.GET_ANSWER,
        payload:{
            promt, 
            answer:res.data.choices[0].message.content}
    })
}