// material-ui
import { Box } from '@mui/material';

// project import
import NavGroup from './NavGroup';
// import menuItem from 'menu-items';
import utilities from 'menu-items/utilities';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {

  const navGroups = [utilities].map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
};

export default Navigation;
