import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {FacebookButton, GithubButton, TwitterButton, GoogleButton} from "./components/ProviderButtons";

import GoogleLogin from 'react-google-login';
import {PostData} from './../services/PostData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    "& > *+*": {
      marginTop: theme.spacing.unit
    }
  }
});

class ProviderChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this
      .signup
      .bind(this);
  }
  static propTypes = {
    login: PropTypes.bool,
    register: PropTypes.bool,
    onChoice: PropTypes.func,
    providers: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const {
      classes,
      login,
      register,
      providers
    } = this.props;

    const commonProps = {
      login,
      register,
      variant: 'contained',
      color: 'primary',
      className: classes.button,
      onClick: this.handleClick
    };
    const responseGoogle = (response) => {
      console.log("google console");
      console.log(response);
      this.signup(response, 'google');
    }
    return (
        <div className={classes.root}>
          <GoogleLogin
              clientId="1094067897150-86v77idjftcv24mhrnb48sjubdujc4d0.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}/>
      </div>
    );
  }

  handleClick = providerId => {
    console.log("ya allah")

  };
  signup(res, type) {
    let postData;
    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    if (postData) {
      PostData('signup', postData).then((result) => {
        let responseJson = result;
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({redirect: true});
      });
    } else {}
  }
}

export default withStyles(styles)(ProviderChoices);
