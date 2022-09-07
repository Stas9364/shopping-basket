import {AppThunk} from "../../reduxStore/reduxStore";
import {AUTH, logoutAC} from "../Login/authAction";
import {getDocs, query} from "firebase/firestore";
import {InitialStateType} from "../Card/cartReducer";
import {addDoc, collection, db} from "../../firebase/firebase";
import {changeIsSelectedStatus} from "../../utils";

enum GOODS {
    GET_GOODS = 'GET_GOODS',
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    SELECT_PRODUCT = 'SELECT_PRODUCT',
}

export type ProductType = {
    "id": string
    "title": string
    "price": number
    "description": string
    "image": string
    "isSelected": boolean
}



export const initialState: Array<ProductType> = [];

export const goodsReducer = (state: Array<ProductType> = initialState, action: GoodsActionsType): Array<ProductType> => {
    switch (action.type) {
        case GOODS.GET_GOODS:
            return [...state, ...action.goods];

        case GOODS.CREATE_PRODUCT:
            return [...state, action.product];

        case AUTH.LOGOUT:
            return [];

        case GOODS.SELECT_PRODUCT:
            return state.map(p => p.id === action.id ? { ...p, isSelected: action.isSelected } : p);

        default:
            return state;
    }
};

export type GoodsActionsType =
    | ReturnType<typeof getGoodsAC>
    | ReturnType<typeof createProductAC>
    | ReturnType<typeof selectProductAC>
    | ReturnType<typeof logoutAC>

export const getGoodsAC = (goods: Array<ProductType>) => ({type: GOODS.GET_GOODS, goods} as const);
export const createProductAC = (product: ProductType) => ({type: GOODS.CREATE_PRODUCT, product} as const);
export const selectProductAC = (id: string, isSelected: boolean) => ({type: GOODS.SELECT_PRODUCT, id, isSelected} as const);

export const getGoodsTC = (): AppThunk => async (dispatch) => {
    const goodsArr = [] as Array<InitialStateType>;

    //get collection
    const prodCollection = await getDocs(query(collection(db, 'Products')));
    if (prodCollection.docs.length > 0) {

        //p.data() - document of collection
        prodCollection.docs.forEach((p) => goodsArr.push(p.data() as InitialStateType)) ;
    }
    dispatch(getGoodsAC(goodsArr));

    localStorage.setItem('goods', JSON.stringify(goodsArr));
};

export const getGoodsFromLS = (): AppThunk => (dispatch) => {
    // @ts-ignore
    dispatch(getGoodsAC(JSON.parse(localStorage.getItem('goods'))));
};

export const createProductTC = (product: ProductType): AppThunk => async () => {
    await addDoc(collection(db, 'Products'), product);
};

export const selectProductTC = (id: string, isSelected: boolean): AppThunk => async (dispatch) => {
    changeIsSelectedStatus(id, isSelected);
    dispatch(selectProductAC(id, isSelected));
};