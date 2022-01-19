import { combineReducers } from "redux";
import {ListsReducer} from './ListsReducer'

export const rootReducer = combineReducers({
    ListsReducer: ListsReducer
})