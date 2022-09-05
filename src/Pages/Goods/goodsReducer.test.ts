import {getGoodsAC, goodsReducer, initialState, selectProductAC} from "./goodsReducer";

const testState = [
    {
        "id": '123-456',
        "title": 'some title',
        "price": 700,
        "description": 'some description',
        "image": 'some URL',
        "isSelected": false,
    }, {
        "id": 'sad-45w6',
        "title": 'some title',
        "price": 230,
        "description": 'some description',
        "image": 'some URL',
        "isSelected": false,
    }
];

test('get goods from server', () => {
    const endState = goodsReducer(initialState, getGoodsAC(testState));

    expect(endState.length).toBeGreaterThan(0);
});

test('select product', () => {
    const endState = goodsReducer(testState, selectProductAC('sad-45w6', true));

    expect(endState[1].isSelected).toBeTruthy();
})