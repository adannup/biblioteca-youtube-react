import React from 'react';
import PropTypes from 'prop-types';

const ReturnButton = props => <button className="button-control" onClick={props.onClickReturnButton}>Regresar</button>;

ReturnButton.propTypes = {
  onClickReturnButton: PropTypes.func.isRequired,
};

export default ReturnButton;
