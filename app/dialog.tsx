'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from "@mui/material";

const themeUITheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1898db",
    },
    background: {
      default: "#07141a",
    }
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

type DialogProps = {
  isOpen: boolean
  displayDialog: React.Dispatch<React.SetStateAction<any>>;
};

export default function AccountSettingDialog({ displayDialog, isOpen }: DialogProps) {
  return (
    <ThemeProvider theme={themeUITheme}>
      <React.Fragment>
        <BootstrapDialog
          onClose={() => displayDialog(false)}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => displayDialog(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
              Click the button below to log out of your profile.
            </Typography>
            <Typography gutterBottom>
              Click the button below to download all data that is associated with your profile. This data includes all conversations stored in Grok as well as all prompts stored in the PromptIDE.
            </Typography>
            <Typography gutterBottom>
              Clicking the button below erases all data that is associated with your profile. This data includes everything stored in Grok and the PromptIDE. Note that this action is immediate and irreversible. Once the profile has been deleted, there is no way to recover any of the data.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => displayDialog(false)}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </ThemeProvider>
  );
}