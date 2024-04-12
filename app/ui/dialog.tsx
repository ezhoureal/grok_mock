import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme } from "@mui/material";
import React from 'react';
import { GithubSignOut } from '../data/auth_helper';

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
          fullWidth={true}
          maxWidth="md"
          onClose={() => displayDialog(false)}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Profile settings
          </DialogTitle>
          <DialogContent dividers>
            <strong className="block m-3">Logout</strong>
            <Typography gutterBottom>
              Click the button below to log out of your profile.
            </Typography>
            <form action={GithubSignOut}>
              <button className='bg-[#2196f3] rounded m-3 py-2' type="submit">
                <span className='px-4'>Logout</span>
              </button>
            </form>
            <strong className="block m-3">Download data</strong>
            <Typography gutterBottom>
              Click the button below to download all data that is associated with your profile. This data includes all conversations stored in Grok as well as all prompts stored in the PromptIDE.
            </Typography>
            <button className='bg-[#2196f3] rounded m-3 py-2'>
              <span className='px-4'>Download profile data.</span>
            </button>

            <strong className="block m-3">Delete profile</strong>
            <Typography gutterBottom>
              Clicking the button below erases all data that is associated with your profile. This data includes everything stored in Grok and the PromptIDE. Note that this action is immediate and irreversible. Once the profile has been deleted, there is no way to recover any of the data.
            </Typography>
            <button className='bg-[#2196f3] rounded m-3 py-2'>
              <span className='px-4'>Delete profile and all data.</span>
            </button>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => displayDialog(false)}>
              Exit
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </ThemeProvider>
  );
}