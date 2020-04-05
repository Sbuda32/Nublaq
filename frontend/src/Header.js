import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Backdrop from '@material-ui/core/Backdrop';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';

import SignIn from './SignUp-SignIn'

import NublaqLogo from './NUBLAQ_ICON.png'

import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  toolbar: {

    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingTop: '0px',
    justifyContent: 'space-between',
  },
  toolbarTitle: {

    flex: 1,
  },
  logo: {

    width: '20%',
    position: 'relative',
  },
  toolbarSecondary: {

    justifyContent: 'center',
    overflowX: 'auto',
  },
  toolbarLink: {

    padding: theme.spacing(1),
    flexShrink: 0,
  },
  
}));

const ImageStyle = styled.img`
  position: inherit;
  width: 9%;
  margin-left: 20%;
`;

export default function Header(props) {
  const classes = useStyles(props);
  const { sections } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <ImageStyle src={NublaqLogo} className={classes.logo} />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={ handleOpen }>
          Sign up
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <SignIn></SignIn>
          </Fade>
      </Modal>

      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};