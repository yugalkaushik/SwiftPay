//STATE MANAGEMENT FOR AUTHENTICATION USING CONTEXT

import React, { useReducer} from "react";
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

const AuthState = props => {
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null
    };
  
    const [state, dispatch] = useReducer(AuthReducer, initialState);
  
    // Load User
    const loadUser = async () => {
      if (localStorage.token) {
        axios.defaults.headers.common['x-auth-token'] = localStorage.token;
      } else {
        delete axios.defaults.headers.common['x-auth-token'];
      }
  
      try {
        const res = await axios.get('/api/auth');
        dispatch({ type: USER_LOADED, payload: res.data });
      } catch (err) {
        dispatch({ type: AUTH_ERROR });
      }
    };
  
    // Register User
    const register = async formData => {
      try {
        const res = await axios.post('/api/auth/signup', formData);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        loadUser();
      } catch (err) {
        dispatch({ type: REGISTER_FAIL, payload: err.response.data });
      }
    };
  
    // Login User
    const login = async formData => {
      try {
        const res = await axios.post('/api/auth/signin', formData);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        loadUser();
      } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data });
      }
    };
  
    // Logout
    const logout = () => dispatch({ type: LOGOUT });
  
    return (
      <AuthContext.Provider
        value={{
          token: state.token,
          isAuthenticated: state.isAuthenticated,
          loading: state.loading,
          user: state.user,
          error: state.error,
          register,
          login,
          logout,
          loadUser
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthState;