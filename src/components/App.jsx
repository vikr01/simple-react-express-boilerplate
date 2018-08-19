// @flow
import '../styles/global.css';
import React, { Component, Fragment } from 'react';
import type { Node } from 'react';
import { hot } from 'react-hot-loader';

type Props = {};

export default hot(module)(
  class App extends Component<Props> {
    props: Props;

    static displayName = 'App';

    static propTypes = {};

    static defaultProps = {};

    constructor(props: Props) {
      super(props);
      this.state = {};
    }

    render(): Node {
      return <Fragment>{null}</Fragment>;
    }
  }
);
