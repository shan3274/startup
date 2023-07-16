import '@/styles/globals.css';
import '../styles/ads.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from '../src/redux/features/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
