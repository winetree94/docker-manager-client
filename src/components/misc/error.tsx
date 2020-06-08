/**
 * Error boundary component
 * componentDidCatch 는 react hook 에서 사용할 수 없다.
 */
import React, { Component, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public readonly state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  componentDidCatch = (error: Error): void => {
    this.setState({
      hasError: true,
      error: error,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>{this.state.error}</h1>;
    } else {
      return this.props.children;
    }
  }
}
