import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { GlobalStyle } from './global.styles';

// Add Easy loading for chunking.
const HomePage = lazy(() => 
  import('./pages/homepage/homepage.component')
);
const ShopPage = lazy(() => 
  import('./pages/shop/shop.component')
);
const CheckoutPage = lazy(() => 
  import('./pages/checkout/checkout.component')
);
const CheckoutCompletePage = lazy(() => 
  import('./pages/checkout-complete/checkout-complete.component')
);
const SignInAndSignUpPage = lazy(() => 
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

export class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route path='/' component={HomePage} exact={true} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/signin' exact={true}
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to='/' />
                  ) : (
                      <SignInAndSignUpPage />
                    )
                }
              />
              <Route path='/checkout' component={CheckoutPage} exact={true} />
              <Route path='/checkout-complete' component={CheckoutCompletePage} exact={true} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);