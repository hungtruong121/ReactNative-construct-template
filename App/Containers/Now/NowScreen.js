import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Image, TouchableOpacity, FlatList,
  Dimensions, ScrollView, Platform,
  TouchableWithoutFeedback, RefreshControl,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import {
  Button, Block,Text, BaseModal, Cart,
  Card, Header, Input, Picker, Loading
} from "../../Components";
import UserActions from '../../Stores/User/Actions';
import {
  getToken, getLanguage,
  resetUser, getUserId,
} from '../../Utils/storage.helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { strings } from '../../Locate/I18n';
import Style from './NowScreenStyle';
import { ApplicationStyles } from '../../Theme';

class NowScreen extends Component {
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
    // const { userActions } = this.props;
    // const token = await getToken();
    // const language = await getLanguage();
    // const userId = await getUserId();
    // const userInfo = {
    //   token: token ? token : '',
    //   language: language ? language : Constants.VI,
    //   userId: userId ? userId : '',
    // };
    // this.handleGetDataCart(userInfo.userId);
    // userActions.setInfoUser(userInfo);
    // if (userId && userId !== '' && token && token !== '') {
    //   userActions.fetchProfile(userId);
    // }
    // this.requestUserPermission(userId);
  };

  // requestUserPermission = async userId => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     messaging().onMessage(async remoteMessage => {
  //       this.pushNotification(remoteMessage);
  //     });
  //     messaging().setBackgroundMessageHandler(async remoteMessage => {
  //       this.pushNotification(remoteMessage);
  //     });
  //     messaging().getToken().then(token => {
  //       if (userId && userId !== '') {
  //         this.saveTokenToDatabase(userId, token);
  //       }
  //     });
  //     messaging().onTokenRefresh(token => {
  //       if (userId && userId !== '') {
  //         this.saveTokenToDatabase(userId, token);
  //       }
  //     });
  //   }
  // };

  // saveTokenToDatabase = (userId, token) => {
  //   const data = {
  //     customerId: userId,
  //     token,
  //   };
  //   try {
  //     userService.saveToken(data);
  //   } catch (error) {}
  // };

  // pushNotification = remoteMessage => {
  //   if (Platform.OS == 'ios') {
  //     PushNotificationIOS.presentLocalNotification({
  //       alertTitle: remoteMessage.notification.title,
  //       alertBody: remoteMessage.notification.body,
  //       applicationIconBadgeNumber: 1,
  //     });
  //   } else {
  //     PushNotification.localNotification({
  //       title: remoteMessage.notification.title,
  //       message: remoteMessage.notification.body,
  //       soundName: 'default',
  //     });
  //   }
  // };


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
        <Text>NowScreen</Text>
      </Block>
    );
  }
}

NowScreen.defaultProps = {};

NowScreen.propTypes = {
  userActions: PropTypes.object,
  userId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  errorCode: state.user.errorCode,
  userId: state.user.userId,
})

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NowScreen);

