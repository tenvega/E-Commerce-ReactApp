import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Products from './components/Products';
import Synthesizers from './components/Synthesizers';
import About from './components/About';
import Contact from './components/Contact';
import App from './components/App'

ReactDOM.render(
   <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/synthesizers" component={Synthesizers} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route exact="/home" component={App}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
