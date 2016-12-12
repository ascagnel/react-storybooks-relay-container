/* @flow */
'use strict';

import React from 'react';

// Emulates a Relay-compatible container, passing the data in directly.
// It's hard to know how well this can work for complicated examples. However,
// it's worked well enough so far - ./

export default class StubbedRelayContainer extends React.Component {
  // Provide a stubbed context for child componentes
  getChildContext() {
    return {
      relay: {
        forceFetch: () => ({ abort: () => {} }),
        getFragmentResolver: () => {},
        getStoreData: () => {},
        primeCache: () => ({ abort: () => {} })
      },
      route: { name: 'string', params:{}, useMockData: true, queries: {}}
    };
  }

  // Directly render the child, and add the data
  render() {
    return <this.props.Component {...this.props.props} />;
  }

  // Needed to pass the isRelayContainer validation step
  getFragmentNames() {}
  getFragment() {}
  hasFragment() {}
  hasVariable() {}
}

// Expose dummy relay and a fake route
StubbedRelayContainer.childContextTypes = {
  relay: React.PropTypes.object,
  route: React.PropTypes.object
};
