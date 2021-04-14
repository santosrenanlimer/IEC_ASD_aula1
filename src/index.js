import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Blog from './pages/blog';
import BlogDetails1 from './pages/blogDetails1';
import BlogDetails2 from './pages/blogDetails2';
import Sobre from './pages/sobre';
import Descricao from './pages/descricao';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Blog} />
      <Route path="/blog-details-1" exact={true} component={BlogDetails1} />
      <Route path="/blog-details-2" exact={true} component={BlogDetails2} />
      <Route path="/sobre" exact={true}   component={Sobre} />
      <Route path="/descricao" exact={true} component={Descricao} />
    </Switch>
  </ BrowserRouter>
    , document.getElementById('root'));