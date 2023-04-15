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
    default:
        return state;
    }
};