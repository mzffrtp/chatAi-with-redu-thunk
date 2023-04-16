import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    chatData: [],
    imageData: [],
    isLoading: false
}

export const chatReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case ActionTypes.GET_ANSWER:
            return{
                ...state,
                chatData: [...state.chatData, payload ],
                isLoading: false
            };
        case ActionTypes.CLEAR_SCREEN:
            return {
                ...state,
                chatData: [],
                imageData: []
            }
        case ActionTypes.GET_IMAGE:
            return{
                ...state,
                imageData: [...state.imageData, payload],
                isLoading:false

            }
    default:
        return state;
    }
};