import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {UserReducer} from "./reducers/UserReducer.js";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";

const userStore = createStore(UserReducer)

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={userStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>


)
