import React from "react";

import Home from 'pages/Home.js';
import SecondPage from 'pages/SecondPage.js';
import ThirdPage from 'pages/ThirdPage.js';

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'second', path: '/second', component: SecondPage },
  { name: 'third', path: '/third', component: ThirdPage },
];

export default routes;