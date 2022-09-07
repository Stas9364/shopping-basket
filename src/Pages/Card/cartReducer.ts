import {AppThunk} from "../../reduxStore/reduxStore";
import {changeIsSelectedStatus} from "../../utils";

enum CART {
    ADD_TO_CART = 'ADD_TO_CART',
    DELETE_FROM_CART = 'DELETE_FROM_CART',
    ADD_QUANTITY_AND_PRICE = "ADD_QUANTITY_AND_PRICE"
}

export type InitialStateType = {
    "id": string
    "title": string
    "price": number
    "description": string
    "image": string
    "isSelected": boolean
    "quantity": number
}

export const initialState: Array<InitialStateType> = [];

export const cartReducer = (state: Array<InitialStateType> = initialState, action: CartActionsType): Array<InitialStateType> => {
    switch (action.type) {
        case CART.ADD_TO_CART:
            return [...state, {...action.product, quantity: 1}];
        case CART.DELETE_FROM_CART:
            return state
                .filter(el => el.id !== action.id)
                .map(el => el.id === action.id
                    ? {...el, isSelected: action.isSelected}
                    : el);
        case CART.ADD_QUANTITY_AND_PRICE:
            return state.map(el => {
                return el.id === action.id
                    ? {...el, quantity: action.quantity, price: (action.productPrice * action.quantity)}
                    : el
            });
        default:
            return state;
    }
};

export type CartActionsType =
    | ReturnType<typeof addToCartAC>
    | ReturnType<typeof deleteFromCartAC>
    | ReturnType<typeof addQuantityAndPriceAC>

export const addToCartAC = (product: InitialStateType) => ({type: CART.ADD_TO_CART, product} as const);
export const deleteFromCartAC = (id: string, isSelected: boolean) => ({type: CART.DELETE_FROM_CART, id, isSelected} as const);
export const addQuantityAndPriceAC = (quantity: number, id: string, productPrice: number) => (
    {type: CART.ADD_QUANTITY_AND_PRICE, id, quantity, productPrice} as const);

export const deleteFromCartTC = (id: string, isSelected: boolean): AppThunk => (dispatch) => {
    changeIsSelectedStatus(id, isSelected);
    dispatch(deleteFromCartAC(id, isSelected));
};