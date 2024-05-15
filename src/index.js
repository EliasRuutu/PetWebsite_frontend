import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider, useDispatch } from 'react-redux'
import { SnackbarProvider, useSnackbar } from 'notistack'
import styled from 'styled-components';
import { MaterialDesignContent } from 'notistack'
import { loadAllClientsInfo } from './redux/client/clientSlice';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
const root = ReactDOM.createRoot(document.getElementById('root'));
const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
}));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
       autoHideDuration={1500}
       Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
