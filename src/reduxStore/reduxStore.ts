import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {GoodsActionsType, goodsReducer} from "../Pages/Goods/goodsReducer";
import {AuthActionsType} from "../Pages/Login/authAction";
import {CardActionsType, cardReducer} from "../Pages/Card/cardReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export type AppActionsType =
    | GoodsActionsType
    | AuthActionsType
    | CardActionsType;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['card']
}

const rootReducer = combineReducers({
    goods: goodsReducer,
    card: cardReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
