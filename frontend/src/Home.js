import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';
import MainHome from './MainHome';
import Article from './Article';
import About_Us from './About_Us';

const sections = [
  { title: 'About Us', url: '/about-us' },
  { title: 'Podcasts', url: '#' },
  { title: 'Nublaq TV', url: '#' },
  // { title: 'Social Commentary', url: '#' },
  // { title: 'Store', url: '#' },
  { title: 'Services', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

const useStyles = makeStyles({
  footer: {
    marginTop: "1px",
  }
})

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nublaq Africa" sections={sections} />
        <main>
          <Switch>
            <Route path='/' component={MainHome} exact />
            <Route path='/article' component={Article} />
            <Route path='/about-us' component={About_Us} />
          </Switch>
        </main>
      </Container>
      <Footer className={classes.footer} title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
// © 2020 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
