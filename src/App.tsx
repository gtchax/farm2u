import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import AppRouter from './routes'
import "./App.css";
import { store } from './lib/store';

function FarmToYou() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter/>}  />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default FarmToYou;
