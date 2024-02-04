import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, FormControl,
  TextField, Box
} from '@mui/material';
import Button from '@mui/material/Button';
import { useExcalidrawAPI } from '../utils/ExcalidrawAPIContext';

type SaveDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const SaveDialog: React.FC<SaveDialogProps> = ({ isOpen, handleClose }) => {
  const { excalidrawAPI } = useExcalidrawAPI();


  const currentElements = excalidrawAPI?.getSceneElements();
  const requestObject = {
    id: excalidrawAPI?.id,
    name: excalidrawAPI?.getAppState().name,
    elements: currentElements || [],
  };

const handleSave = () => {
    console.log(requestObject);
    handleClose();
};


  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Save your work</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <FormControl sx={{ width: '50ch' }}>
            <Box margin={2}>
              <TextField
                label="ID"
                value={requestObject.id}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Box>
            <Box margin={2}>
              <TextField
                label="Name"
                defaultValue={requestObject.name}
                fullWidth
              />
            </Box>
            <Box margin={2}>
              <TextField
                label="Count of Elements"
                value={ requestObject?.elements.length || 0 }
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Box>
          </FormControl>
        </form>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;