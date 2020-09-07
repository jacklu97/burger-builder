import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 0.3,
    bacon: 0.7
}

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient)
    const updatedState = {
        building: true,
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedIngs = updateObject(state.ingredients, updatedIng)
    const updatedSt = {
        building: true,
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedSt)
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action)
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, 
                {
                    ingredients: action.ingredients,
                    totalPrice: 4,
                    error: false,
                    building: false
                }
            )
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true})
        default:
            return state;
    }
}

export default reducer;