import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './pages/LoginPage/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUpPage/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import BillingPage from './pages/BillingPage/BillingPage';
import Protected from './components/Protected';
import { DataContextProvider } from './context/DataContext';

import PlanDetails from './pages/PlanDetails/PlanDetails';
import CancelSub from './pages/CancelSubPage/CancelSub';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>

    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<SignUp />} />

          <Route path='/billing' element={<Protected>
            <BillingPage />
          </Protected>} />
          <Route path='/success' element={<Protected>
            <PlanDetails />
          </Protected>} />
          <Route path='/failure' element={<Protected>
            <CancelSub />
          </Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </DataContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
