import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';
import NotFoundPage from './components/not-found/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
