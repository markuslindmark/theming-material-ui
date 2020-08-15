import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    '&.MuiButton-containedPrimary': {
      color: 'rgba(0,0,0,0.8)',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: '#000',
      },
      '& .MuiTouchRipple-child': {
        backgroundColor: theme.palette.primary.enhance,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.primary.main,
        color: 'rgba(0,0,0,0.4)',
        opacity: 0.5,
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: 'rgba(0,0,0,0.4)',
        },
      },
    },
  },
}));

export const AxisButton = ({ label, ...props }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Button
        //type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        {label}
      </Button>
    </Container>
  );
};

AxisButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

AxisButton.defaultProps = {
  label: 'defaultText',
  // backgroundColor: null,
  // primary: false,
  // size: 'medium',
  // onClick: undefined,
};
