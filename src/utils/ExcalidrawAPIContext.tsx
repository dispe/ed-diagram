import { createContext, useContext } from 'react';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { Diagram } from '../models/Diagram';

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

export const DiagramContext = createContext<Diagram | null>(null);

export function useDiagram() {
  const context = useContext(DiagramContext);
  if (!context) {
    throw new Error('useDiagram must be used within a DiagramProvider');
  }
  return context;
}