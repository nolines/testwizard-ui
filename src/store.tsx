import { legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    base64File: ''
}

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'fileChanged':
            return { ...state, base64File: action.payload };
        default:
            return { ...state, base64File: '' }
    }
}

const persistConfig = {
    key: 'initialState',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);