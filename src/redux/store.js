import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['worklogs', 'labels', 'userInfo']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

const persistor = persistStore(store)

export { store, persistor }
