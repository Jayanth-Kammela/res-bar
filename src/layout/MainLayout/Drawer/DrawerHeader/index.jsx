import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from "../../../../assets/shivaslog.png";

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center" color={'#FFFF'} sx={{
        color:'#FFFF',
        mt:4

      }}>
        <div>
          <img src={Logo} alt="" />
        </div>
        {open && <Typography component={'p'} sx={{
          color: '#E8562E',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
        }}>Shiva’s</Typography>}
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
