import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionTitle, SectionWrapper } from './section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
