import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import themeReducer from '../common/themeSlice';
import personalHomepageReducer from '../features/homepage/personalHomepageSlice';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    personalHomepage: personalHomepageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
