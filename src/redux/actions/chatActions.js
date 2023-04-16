import axios from "axios";
import { ActionTypes } from "../constants/actionTypes"

export const getDataStart = () => ({
    type: ActionTypes.GET_DATA_START,
    payload: true
});

export const clearScreen = () => ({
    type: ActionTypes.CLEAR_SCREEN,
})

export const getAnswer = (promt) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/chat/completions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0c47326e3bmsh1f2198a062270dcp174b40jsn0fd2999e0f8f',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${promt}"}]}`
    };

    const res = await axios.request(options);
    dispatch({
        type: ActionTypes.GET_ANSWER,
        payload: {
            promt,
            answer: res.data.choices[0].message.content
        }
    })
}

export const getImage = (promt) => async (dispatch) => {
    const options = {
        method: 'POST',
        url: 'https://openai80.p.rapidapi.com/images/generations',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0c47326e3bmsh1f2198a062270dcp174b40jsn0fd2999e0f8f',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        data: `{"prompt":"${promt}","n":2,"size":"1024x1024"}`
    };

    const res = await axios.request(options)


    dispatch({
        type: ActionTypes.GET_IMAGE,
        payload:{
            promt,
            answer:res.data.data},
    })
}