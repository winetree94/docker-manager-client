import React, { Component, FunctionComponent } from 'react';

const asyncComponent= (component:() => Promise<Component>) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount() {
      component().then((component) => {
        this.setState({
          component: component,
        });
      });
    }

    render() {
      const Component = this.state.component;
      return Component ? <Component /> : null;
    }
  };
};
