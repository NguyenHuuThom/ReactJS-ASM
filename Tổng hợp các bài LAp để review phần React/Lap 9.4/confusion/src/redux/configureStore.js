import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotion'
import { Leaders } from './Leaders'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { InitialFeedback } from './forms';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware( thunk, logger )
    )

    return store;
}