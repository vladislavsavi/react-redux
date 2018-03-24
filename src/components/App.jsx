import 'normalize.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ToTopButton from './common/toTopButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div >
        <h1 >Hello World, this is {this.props.developer.Iam}</h1 >
        <h3 >It's {(new Date()).toString()} </h3 >
        <ToTopButton />
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    developer: state.developerReducer
  };
};


App.propTypes = {
  developer: PropTypes.string
};


export default connect(mapStateToProps)(App);
