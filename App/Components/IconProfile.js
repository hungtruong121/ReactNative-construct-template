import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { StyleSheet  } from "react-native";
import Block from './Block';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-paper';
import { Colors } from "../Theme";

class IconProfile extends Component {
  
  render() {
    const {
      color,
      focused,
    } = this.props;
    return (
      <Block center flex={false}>
        {focused ? (
          <Icon name='user' size={22} color={color} />
        ) : (
          <Icon name='user' size={22} color={color} />
        )}
        <Badge
          style={styles.icon}
        >5</Badge>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: -4, 
    left: 9,
  },
});

IconProfile.propTypes = {
  color: PropTypes.string,
  focused: PropTypes.bool,
}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
  null,
)(IconProfile);
