import * as React from "react";
import { Button } from "components";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useAddAccountDlg from "./useAddAccountDlg";

export interface IAddAccountDlg {
  open: boolean;
  handleClose: () => void;
}

/**
 * Add Account Dialog
 * @param open
 * @param handleClose
 * @constructor
 */
const AddAccountDlg = ({ open, handleClose }: IAddAccountDlg) => {
  const {
    accountName,
    handleAccountNameChange,
    handleAddAccount,
    loading,
    error,
  } = useAddAccountDlg(handleClose);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth keepMounted={false}>
      <DialogTitle>Add Account</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Account Name"
          fullWidth
          value={accountName}
          onChange={handleAccountNameChange}
          error={!!error}
          helperText={error}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddAccount} loading={loading}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddAccountDlg;
