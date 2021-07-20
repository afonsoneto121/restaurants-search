import { Types } from '../actions/actionMap'

const initalState = {
    restaurants: [],
    restaurantSelected: {}

};

export default function reducer(state = initalState, action) {
    switch (action.type) {
        case Types.SET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }

        case Types.SET_RESTAURANT:
            return {
                ...state,
                restaurantSelected: action.payload
            }
        default:
            return state

    }
}

