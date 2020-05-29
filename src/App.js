import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// --------------------------- Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/styles.css';

// --------------------------- Components
import AppMenu      from './components/layout/Navbar';
import Footer       from './components/layout/Footer';
import Login        from './components/layout/Login';

import $$_User      from './components/Nav_User/user';
import $$_Group     from './components/Nav_Group/group';
import $$_Case      from './components/Nav_Case/case';
import $$_Investigation from './components/Nav_Investigation/investigation';
import $$_Settings  from './components/Nav_Settings/settings';
import $$_Logout    from './components/Nav_Logout/logout';
import $$_NotFoundPage from './components/layout/notFound';

// --------------------------- Redux
import { Provider } from 'react-redux';
import $$_store     from './store';
import Alert        from './components/layout/Alert';

// --------------------------- Fonts
import { createGlobalStyle } from 'styled-components';

import __Lato_Woff2 from './assets/css/fonts/_Lato/Lato-Regular.woff2';
import __Lato_Woff from './assets/css/fonts/_Lato/Lato-Regular.woff';
import __Montserrat_Woff2 from './assets/css/fonts/_Montserrat/Montserrat-Regular.woff2';
import __Montserrat_Woff from './assets/css/fonts/_Montserrat/Montserrat-Regular.woff';
import __Roboto_Woff2_Condensed from './assets/css/fonts/_RobotoCondensed/RobotoCondensed-Regular.woff2';
import __Roboto_Woff_Condensed from './assets/css/fonts/_RobotoCondensed/RobotoCondensed-Regular.woff';
import __Roboto_Woff2 from './assets/css/fonts/_Roboto/Roboto-Regular.woff2';
import __Roboto_Woff from './assets/css/fonts/_Roboto/Roboto-Regular.woff';
import __Spartan_Woff2 from './assets/css/fonts/_Spartan/Spartan-Regular.woff2';
import __Spartan_Woff from './assets/css/fonts/_Spartan/Spartan-Regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face
  {
    font-family: '__Lato';
    font-style: normal;
    font-weight: normal;
    src: url( '${ __Lato_Woff2 }' ) format( 'woff2' ),
         url( '${ __Lato_Woff  }' ) format( 'woff' );
  }

  @font-face
  {
    font-family: '__Montserrat_Woff';
    font-style: normal;
    font-weight: normal;
    src: url( '${ __Montserrat_Woff2 }' ) format( 'woff2' ),
         url( '${ __Montserrat_Woff  }' ) format( 'woff' );
  }

  @font-face
  {
    font-family: '__Roboto_Condensed';
    font-style: normal;
    font-weight: normal;
    src: url( '${ __Roboto_Woff2_Condensed }' ) format( 'woff2' ),
         url( '${ __Roboto_Woff_Condensed  }' ) format( 'woff' );
  }

  @font-face
  {
    font-family: '__Roboto';
    font-style: normal;
    font-weight: normal;
    src: url( '${ __Roboto_Woff2 }' ) format( 'woff2' ),
         url( '${ __Roboto_Woff  }' ) format( 'woff' );
  }

  @font-face
  {
    font-family: '__Spartan';
    font-style: normal;
    font-weight: normal;
    src: url( '${ __Spartan_Woff2 }' ) format( 'woff2' ),
         url( '${ __Spartan_Woff  }' ) format( 'woff' );
  }

  html, body
  {
    //font-family: '__Lato', '__Montserrat', '__Roboto_Condensed', '__Roboto', 'Spartan', sans-serif;
    font-family: '__Lato', '__Roboto', sans-serif;
  }
`;

const  App = () =>
    <Provider store={ $$_store }>
        <Router>
            <Fragment>
                <GlobalStyle />
                <Route exact path='/' component={ Login } />
                <section className='__main_section'>
                    <AppMenu />
                    <Alert />
                    <Switch>
                        <Route exact path='/users'
                               component={ $$_User } />
                        <Route exact path='/groups'
                               component={ $$_Group } />
                        <Route exact path='/cases'
                               component={ $$_Case } />
                        <Route exact path='/investigations'
                               component={ $$_Investigation } />
                        <Route exact path='/settings'
                               component={ $$_Settings } />
                        <Route exact path='/logout'
                               component={ $$_Logout } />
                        <Route component={ $$_NotFoundPage } />
                    </Switch>
                    <Footer />
                </section>
            </Fragment>
        </Router>
    </Provider>

export default App;
