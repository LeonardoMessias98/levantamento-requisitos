import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './screens/main';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}