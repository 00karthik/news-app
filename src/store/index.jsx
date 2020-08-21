// store.js
import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import InitialState from './initial-state';
import { CHANGE_LANG } from '../constants/actions';
import { TOGGLE_SIDEBAR } from '../constants/actions';

const initialState = InitialState;
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((storeState, action) => {
    switch (action.type) {
      case CHANGE_LANG:
        return {
          ...storeState,
          lang: action.data,
        };
      case TOGGLE_SIDEBAR:
        return {
          ...storeState,
          showSidebar: action.data,
        };
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, StateProvider };
