// Importing Material UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Import React Packages
import * as React from 'react';

// Import React Redux Packages
import {useDispatch, useSelector} from "react-redux";
import { setOpen } from '../../../redux/movieSlice';

// Import Local Files
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  // React Redux
  const {open,id} = useSelector(store=>store.movie);
  const dispatch = useDispatch();

  // Functions
  const handleClose = () =>{
    dispatch(setOpen(false));
  }

  return (
    <React.Fragment> 
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" 
      >
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VideoBackground movieId={id} bool = {true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}