import {ProductType} from "../Pages";

export const changeIsSelectedStatus = (id: string, isSelected: boolean) => {
    // @ts-ignore
    const goods = JSON.parse(localStorage.getItem('goods'));
    localStorage.setItem(
        'goods',
        JSON.stringify(goods.map((p: ProductType) => p.id === id
            ? {...p, isSelected}
            : p))
    );
};