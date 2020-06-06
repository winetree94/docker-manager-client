import React, { ReactNode, FunctionComponent } from 'react';

export type IProps = {
  name: string;
  children: ReactNode;
};

export const a: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div>
      <p>{props.name}</p>
      {props.children}
    </div>
  );
};
