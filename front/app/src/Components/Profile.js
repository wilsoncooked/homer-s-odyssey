import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  signout: {
    textDecoration: 'none',
    padding: '10px',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {useNextVariants: true},
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: 'homer.simpson@wildcodeschool.fr',
        name: 'Homer',
        lastname: 'Simpson',
      },
    };
  }

  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <List className={classes.root}>
          <h3>Profile</h3>
          <ListItem button>
            <FaceIcon style={{padding: '20px'}} />
            <ListItemText
              primary='Name'
              secondary={`${this.state.profile.name} ${
                this.state.profile.lastname
              }`}
            />
          </ListItem>
          <ListItem button>
            <EmailIcon style={{padding: '20px'}} />
            <ListItemText
              primary='E-mail'
              secondary={this.state.profile.email}
            />
          </ListItem>
          <Link className={classes.signout} to='/signin'>
            <Button variant='contained' size='large' color='primary'>
              Sign Out
            </Button>
          </Link>
        </List>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Profile);
