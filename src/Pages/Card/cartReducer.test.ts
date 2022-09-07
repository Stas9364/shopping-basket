import {addQuantityAndPriceAC, addToCartAC, cartReducer, deleteFromCartAC, initialState} from "./cartReducer";

const testState = {
    "id": '123-456',
    "title": 'some title',
    "price": 700,
    "description": 'some description',
    "image": 'some URL',
    "isSelected": false,
    "quantity": 2
};

test('add goods to cart', () => {
    const endState = cartReducer(initialState, addToCartAC(testState));

    expect(endState.length).toBeGreaterThan(0);
});

test('delete product from cart', () => {
    const initState = [{
        "id": '123-456',
        "title": 'some title',
        "price": 700,
        "description": 'some description',
        "image": 'some URL',
        "isSelected": false,
        "quantity": 2
    }];

    const endState = cartReducer(initState, deleteFromCartAC(testState.id, false));

    expect(endState.length).toEqual(0);
})

test ('add quantity and price of goods', () => {
    const initState = [{
        "id": '123-456',
        "title": 'some title',
        "price": 700,
        "description": 'some description',
        "image": 'some URL',
        "isSelected": false,
        "quantity": 2
    }];

    const endState = cartReducer(initState, addQuantityAndPriceAC(4, '123-456', 700));

    expect(endState[0].quantity).toEqual(4);
    expect(endState[0].price).toEqual(2800);
});