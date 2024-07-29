import { Drawer, DrawerProps } from '@mui/material';
import { FC } from 'react';

interface CustomDrawerProps extends DrawerProps {
  maxWidth?: 'lg' | 'md' | 'full' | 'sm';
  width?: string;
  height?: string;
}

const CustomDrawer: FC<CustomDrawerProps> = ({
  anchor,
  onClose,
  children,
  open,
  keepMounted = false,
  ...props
}) => {
  return (
    <Drawer
      {...props}
      anchor={anchor}
      open={open}
      onClose={onClose}
      keepMounted={keepMounted}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
