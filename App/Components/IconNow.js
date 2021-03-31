import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { StyleSheet  } from "react-native";
import Block from './Block';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconNow extends Component {
  
  render() {
    const {
      color,
      focused,
    } = this.props;
    return (
      <Block center flex={false}>
        {focused ? (
          <Icon name='spinner' size={22} color={color} />
        ) : (
          <Icon name='spinner' size={22} color={color} />
        )}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
});

IconNow.propTypes = {
  color: PropTypes.string,
  focused: PropTypes.bool,
}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
  null,
)(IconNow);
