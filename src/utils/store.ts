import { configureStore, Action } from '@reduxjs/toolkit';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

interface State {
  excalidrawAPI: ExcalidrawImperativeAPI | null; // Replace 'any' with the actual type of your excalidrawAPI
}

const initialState: State = {
  excalidrawAPI: null,
};

interface SetExcalidrawAPIAction extends Action {
  payload: ExcalidrawImperativeAPI;
}

export type RootState = ReturnType<typeof store.getState>

const reducer = (state: State = initialState, action: SetExcalidrawAPIAction): State => {
  switch (action.type) {
    case 'SET_EXCALIDRAW_API':
      return { ...state, excalidrawAPI: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({ reducer });