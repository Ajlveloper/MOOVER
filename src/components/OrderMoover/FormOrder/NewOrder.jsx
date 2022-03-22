import React from "react";
import PropTypes from 'prop-types';

const NewOrder = ({ handleNewOrder }) => {
  return (
    <div className="contentNewOrder">
      <h2>
        Tu orden esta en proceso<span className="orange">.</span>
      </h2>
      <button className="newOrder" onClick={handleNewOrder}>
        ¿Deseas realizar una nueva orden?
      </button>
    </div>
  );
};

NewOrder.prototypes = {
  handleNewOrder: PropTypes.func.isRequired
};


export default NewOrder;
