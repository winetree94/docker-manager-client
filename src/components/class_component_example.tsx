import React, { Component, MouseEvent } from 'react';

export type IClassComponentProps = {
  name?: string;
  age?: string;
};

export type IClassComponentState = {
  name: string;
  age: string;
};

export class ClassComponent extends Component<IClassComponentProps, IClassComponentState> {
  public state = {
    name: this.props.name || '',
    age: this.props.age || '',
  };

  public onButtonClicked = (e: MouseEvent): void => {
    console.log('clicked');
  };

  return(): JSX.Element {
    return (
      <div>
        <button onClick={this.onButtonClicked}>button</button>
      </div>
    );
  }
}
