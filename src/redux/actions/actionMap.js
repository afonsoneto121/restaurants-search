export const Types = {
    SET_RESTAURANTS: 'restauranst/SET_RESTAURANTS',
    SET_RESTAURANT: 'restauranst/SET_RESTAURANT',
}

export function setRestaurants(restauransts) {
    return {
        type: Types.SET_RESTAURANTS,
        payload: restauransts,
    }
}

export function setRestaurant(restauranst) {
    return {
        type: Types.SET_RESTAURANT,
        payload: restauranst,
    }
}

