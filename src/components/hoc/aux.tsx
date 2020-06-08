import React, { FunctionComponent, ComponentType } from 'react';

export type IProp = {
  classes: string[];
};

export const withClass = (WrappedComponent: ComponentType, classes: string[]): FunctionComponent => {
  return (props: Record<string, unknown>): JSX.Element => (
    <div className={classes.join(' ')}>
      <WrappedComponent {...props} />
    </div>
  );
};
