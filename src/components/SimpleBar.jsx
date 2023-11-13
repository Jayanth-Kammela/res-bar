import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const RootStyle = styled(Box)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

const SimpleBarStyle = styled(Box)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[500], 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

export default function SimpleBarScroll({ children, sx, ...other }) {
  return (
    <>
      <RootStyle>
        <SimpleBarStyle timeout={500} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
    </>
  );
}

SimpleBarScroll.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
};
