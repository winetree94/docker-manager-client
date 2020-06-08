import React, { Component, MouseEvent } from 'react';

export type IPersonProps = {
  name: string;
  age: string;
};

export type IPersonState = {
  name: string;
  age: string;
};

export class Person extends Component<IPersonProps, IPersonState> {
  render(): JSX.Element {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

export type IClassComponentProps = {
  name?: string;
  age?: string;
};

export type IClassComponentState = {
  name: string;
  age: string;
};

export class ClassComponent extends Component<IClassComponentProps, IClassComponentState> {
  /* 엘리먼트 바인딩 */
  public input = React.createRef<HTMLInputElement>();

  public state = {
    name: this.props.name || '',
    age: this.props.age || '',
  };

  /**
   * state 순서 보장
   */
  public onType = (): void => {
    this.setState((prevState, props) => {
      return {
        name: prevState.name,
        age: prevState.age + 1,
      };
    });
  };

  public onButtonClicked = (e: MouseEvent): void => {
    console.log('clicked');
  };

  return(): JSX.Element {
    return (
      <div>
        <input
          type="text"
          ref={this.input}
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input type="text" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
        <button onClick={this.onButtonClicked}>button</button>
      </div>
    );
  }
}
