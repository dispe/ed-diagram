import { createContext, useContext } from 'react';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';

type ExcalidrawAPIContextType = {
  excalidrawAPI: ExcalidrawImperativeAPI | null;
  setExcalidrawAPI: (api: ExcalidrawImperativeAPI | null) => void;
};

export const ExcalidrawAPIContext = createContext<ExcalidrawAPIContextType | undefined>(undefined);

export function useExcalidrawAPI() {
  const context = useContext(ExcalidrawAPIContext);
  if (!context) {
    throw new Error('useExcalidrawAPI must be used within a ExcalidrawAPIProvider');
  }
  return context;
}