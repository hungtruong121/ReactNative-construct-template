import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Sizes, Colors, Images } from 'App/Theme';
import PropTypes from 'prop-types';
import { Block, Text } from 'App/Components';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {

  handleGoBack = () => {
    const { navigation, goBackAction, goBackData, onPressBack } = this.props;
    if (onPressBack) {
      onPressBack();
    } else {
      navigation.goBack();
    }
    if (goBackAction) {
      navigation.state.params[goBackAction](goBackData? goBackData : null);
    }
  }

  render() {
    const {
      title,
      centerHeader,
      rightIcon,
      style,
      isShowBack,
      iconBack,
    } = this.props;
    return (
      <Block flex={false} color={Colors
      .green} row center style={[styles.header, style]}>
        <Block flex={false} style={{ width: '10%' }}>
          {isShowBack && (
            <TouchableOpacity onPress={() => this.handleGoBack()}>
              <Text><Icon name={iconBack 
              ? iconBack : "ios-arrow-back"} size={25} color={Colors.white} /></Text>
            </TouchableOpacity>
          )}
        </Block>
        <Block flex={false} style={{width: '80%'}}>
          {title && (
            <Text style={{ fontSize: 20 }} white center>
              {title}
            </Text>
          )}
          {centerHeader}
        </Block>
        <Block flex={false} style={styles.headerRight}>
          {rightIcon}
        </Block>
      </Block>
    );
  }
}


Header.propTypes = {
  title: PropTypes.string,
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Sizes.base / 2,
    paddingTop: Sizes.base * 2.5,
    paddingBottom: Sizes.base / 4,
  },
  headerRight: {
    width: '10%',
    alignItems: 'flex-end'
  }
});
