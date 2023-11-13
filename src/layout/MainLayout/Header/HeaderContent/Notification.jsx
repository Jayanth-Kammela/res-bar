import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Badge,
  Box,
  IconButton,
  Paper,
  Popper,
  useMediaQuery,
  ClickAwayListener
} from '@mui/material';
import Transitions from '../../../../components/@extended/Transitions';
import { Notifications, Close } from "../../../../assets/svgs";


const Notification = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };


  return (
    <Box sx={{ flexShrink: 0, ml: 0.75, marginRight: 4, color: '#FFFF' }}>
      <IconButton
        disableRipple
        color="secondary"
        sx={{
          borderEadius: '50px',
          border: '1px solid rgba(217, 203, 255, 0.40)',
          background: '#2B2638',
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Badge color="primary">
          <Notifications />
        </Badge>
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? -5 : 0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper
              sx={{
                width: '100%',
                minWidth: 285,
                maxWidth: 420,
                mt: 1,
                color: '#FFFF',
                [theme.breakpoints.down('md')]: {
                  maxWidth: 285
                }
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <IconButton size="small" onClick={handleToggle}>
                  <Close width={'14'} />
                </IconButton>
              </ClickAwayListener>
              <div>
                Jayanth
              </div>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Notification;
