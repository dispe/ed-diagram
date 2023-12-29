// SaveDialog.tsx
import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';
import { ExcalidrawElement, ExcalidrawTextElement } from '@excalidraw/excalidraw/types/element/types';
import { Scene as SceneInterface } from '@excalidraw/excalidraw/types/scene/types';
import Scene from "@excalidraw/excalidraw/types/scene/Scene";



export interface VEDScene extends SceneInterface {
  id: string;
  name: string;
  elements: ExcalidrawTextElement[];
}

type SaveDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SaveDialog: React.FC<SaveDialogProps> = ({ isOpen, handleClose }) => {
  const { excalidrawAPI } = useExcalidrawAPI();
  const [elements, setElements] = React.useState<ExcalidrawElement[]>([]);

  useEffect(() => {
    if (isOpen && excalidrawAPI) {
      const currentElements = excalidrawAPI?.getSceneElements();
      setElements([...currentElements]);
      excalidrawAPI.name = 'test-name111';

      // const sceneData = excalidrawAPI.getSceneData();
      // console.log(sceneData);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Save your work</DialogTitle>
      <DialogContent>
        There are {elements.length} elements in the scene.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => {
          // Add your save logic here
          handleClose();
        }}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;