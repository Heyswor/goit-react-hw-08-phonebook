import {
  configureStore,
  // combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './registration/slice';
import { filterReducer } from './filterSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   contact: contactsReducer,
//   filter: filterReducer,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const authPresistedReducer = persistReducer(authPersistConfig, authReducer);

// const totalReducers = {
//   auth: authPresistedReducer,
//   root: persistedReducer,
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contact: persistReducer(persistConfig, contactsReducer),
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
// export const store = configureStore({
//   reducer: totalReducers,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export const persistor = persistStore(store);
