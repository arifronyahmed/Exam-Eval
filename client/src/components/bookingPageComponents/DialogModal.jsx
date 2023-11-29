import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DialogModal({ isOpen, onClose, selectedSlot }) {
  console.log(selectedSlot);
  const handleClickOpen = () => {
    onClose(true);
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Booking Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please confirm the booking info before continuing.
          </DialogContentText>
          <Box
            marginX={6}
            marginY={6}
            justifyContent={'center'}
            display={'flex'}
            alignItems={'center'}
          >
            <DialogContentText>
              {selectedSlot
                ? `You have selected ${
                    selectedSlot.title
                  } from ${selectedSlot.start.toLocaleTimeString()} to ${selectedSlot.end.toLocaleTimeString()}`
                : 'No slot selected'}
            </DialogContentText>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogModal;
