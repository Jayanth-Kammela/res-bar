import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { activeItem } from '../../../../../store/reducers/menu';

const NavItem = ({ item, level }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { drawerOpen, openItem } = useSelector((state) => state.menu);
  console.log(drawerOpen);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} /> : false;

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;
  useEffect(() => {
    if (pathname.includes(item.url)) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelected}
      sx={{
        margin:1,
        bgcolor: '#101928',
        borderRadius: '4px',
        color:'#FFFF',
        my: 1,
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: '#101928',
            borderRadius: '4px',
            color:'#ffff'
          },
          '&.Mui-selected': {
            borderRadius: '4px',
            bgcolor: '#010101',
            color: '#FFFFFF',
            '&:hover': {
              borderRadius: '4px',
              color: '#FFFF',
              // bgcolor: '#101928'
            }
          }
        }),
        ...(!drawerOpen && {
          '&:hover': {
            bgcolor: '#101928',
            borderRadius: '4px',
            color:'#ffff'
          },
          '&.Mui-selected': {
            borderRadius: '4px',
            bgcolor: '#010101',
            color: '#FFFFFF',
            '&:hover': {
              borderRadius: '4px',
              color: '#FFFF',
              bgcolor: '#010101'
            }
          }
        })
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: '#FFFF',
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: '#101928',
                color: '#FFFF'
              }
            }),
            ...(!drawerOpen &&
              isSelected && {
              borderRadius: '4px',
              background: '#010101',
              color: '#FFFFFF',
              '&:hover': {
                borderRadius: '4px',
                background: '#010101',
                color: '#FFFFFF',
              }
            })
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
        primary={
          <Typography variant="p" sx={{ color: '#FFFF',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '145%',}}>
            {item.title}
          </Typography>
        }
      />
      )}
      {/* {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )} */}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
