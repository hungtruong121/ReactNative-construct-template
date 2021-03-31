import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Toast, { DURATION } from 'react-native-easy-toast';
import {
  Image, TouchableOpacity, FlatList,
  Dimensions, ScrollView, Platform,
  TouchableWithoutFeedback, RefreshControl,
} from 'react-native';
import {
  Button, Block,Text, BaseModal, Cart,
  Card, Header, Input, Picker, Loading
} from "../../Components";
import UserActions from '../../Stores/User/Actions';
import { resetUser } from '../../Utils/storage.helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { strings } from '../../Locate/I18n';
import Style from './CreatePostScreenStyle';

class CreatePostScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorCode: '',
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const { errorCode } = nextProps;
    const data = { errorCode};
    return data;
  }

  componentDidMount = async() => {
  };

  render() {
    // const { errorCode } = this.state;
    // const { navigation, userActions } = this.props;
    // if ( errorCode === '401') {
    //   resetUser();
    //   userActions.resetUser();
    //   navigation.navigate(Screens.LOGIN);
    // }
    
    return (
      <Block style={Style.view}>
        {/* <Header 
          centerHeader={this.renderCenterHeader()}
          rightIcon={<Cart navigation={navigation} />}
        /> */}
        <Text>CreatePostScreen</Text>
      </Block>
    );
  }
}

CreatePostScreen.defaultProps = {};

CreatePostScreen.propTypes = {
  errorCode: PropTypes.string,
  userActions: PropTypes.object,
};

const mapStateToProps = (state) => ({
  errorCode: state.user.errorCode,
})

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePostScreen);

