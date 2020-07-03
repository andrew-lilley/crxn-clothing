import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ErrorImageOverlay, 
  ErrorImageContainer, 
  ErrorImageTitle, 
  ErrorImageText } from './error-boundary.styles';

/**
 * Allow us to catch errors by wrapping components into this component.
 */
class ErrorBoundary extends React.Component {

  constructor() {
    super();

    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    // Process the error.
    return { hasErrored: true }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='/images/404.png' />
          <ErrorImageTitle>Our Dog Ate this Page</ErrorImageTitle>
          <ErrorImageText>Our dog is cute but honestly a menace. Where are my trainers? Where is my jacket? Where is the hat that I was going to buy for my Aunt’s birthday? I hope that you can find what you are looking for in <Link to='/shop'>our shop</Link></ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;