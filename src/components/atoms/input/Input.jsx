import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type, className, onChange, children }) => {
  return React.createElement('input',  { className, type, onChange }, children);
};

Input.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func
  };
  

Input.defaultProps = {
  type: 'text',
};

export default Input;
