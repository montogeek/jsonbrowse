import { Component, PropTypes } from 'react';
import { Flex } from 'reflexbox';
import s from 'styled-components';

import filterJson from '../utils/filterJson';

import DataView from './DataView';
import Filter from './Filter';

export default class extends Component {
  state = {
    filter: null,
    json: this.props.json,
  }

  setFilter = (filter) => {
    this.setState({
      json: filterJson(this.props.json, filter),
    });
  };

  render() {
    return (
      <Flex column auto>
        <Filter onChange={ this.setFilter } filter={ this.state.filter } />
        <DataView json={ this.state.json } />
      </Flex>
    );
  }
}

const ValidNotice = s.div`
  padding: 8px 20px;
  background-color: rgb(54, 165, 253);
  color: #FFFFFF;
`;
