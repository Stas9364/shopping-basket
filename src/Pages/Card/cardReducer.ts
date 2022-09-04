enum CARD {
    ADD_TO_CARD = 'ADD_TO_CARD',
    DELETE_FROM_CARD = 'DELETE_FROM_CARD',
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

const initialState: Array<InitialStateType> = [];

export const cardReducer = (state: Array<InitialStateType> = initialState, action: CardActionsType): Array<InitialStateType> => {
    switch (action.type) {
        case CARD.ADD_TO_CARD:
            return [...state, {...action.product, quantity: 1}];
        case CARD.DELETE_FROM_CARD:
            return state.filter(el => el.id !== action.id);
        case CARD.ADD_QUANTITY_AND_PRICE:
            return state.map(el => {
                return el.id === action.id
                    ? {...el, quantity: action.quantity, price: (action.productPrice * action.quantity)}
                    : el
            });
        default:
            return state;
    }
};

export type CardActionsType =
    | ReturnType<typeof addToCardAC>
    | ReturnType<typeof deleteFromCardAC>
    | ReturnType<typeof addQuantityAndPriceAC>

export const addToCardAC = (product: InitialStateType) => ({type: CARD.ADD_TO_CARD, product} as const);
export const deleteFromCardAC = (id: string) => ({type: CARD.DELETE_FROM_CARD, id} as const);
export const addQuantityAndPriceAC = (quantity: number, id: string, productPrice: number) => (
    {type: CARD.ADD_QUANTITY_AND_PRICE, id, quantity, productPrice} as const);