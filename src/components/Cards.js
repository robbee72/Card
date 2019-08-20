import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import map from 'lodash/map';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleDeselect = this.handleDeselect.bind(this);
  }

  handleSelect(key) {
    const { cardsRef } = this.props;

    cardsRef.child(key);
  }

  handleDeselect(key) {
    const { cardsRef } = this.props;

    cardsRef.child(key).remove();
  }

  render() {
    const { cards } = this.props;

    return (
      <section>
        {map(cards, (card, key) => {
          return (
            <Card
              key={key}
              {...card}
              handleSelect={() => this.handleSelect(key)}
              handleDeselect={() => this.handleDeselect(key)}
            />
          );
        })}
      </section>
    );
  }
}

Cards.propTypes = {
  Cards: PropTypes.array
};

export default Cards;
