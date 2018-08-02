import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router, { Route } from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import Drawer from 'src/ui/components/Drawer';
import ConfigProvider from 'src/core/ConfigProvider';
import EventStream from 'src/ui/views/EventStream';
import About from 'src/ui/views/About';

const ReactApp = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('react-root')
  );
}

const App: React.SFC = () => (
  <ConfigProvider>
    <Router>
      <Header />
      <Drawer />
      <Route path="/" component={EventStream} />
      <Route path="/about" component={About} />
    </Router>
    <Footer />
  </ConfigProvider>
);

ReactApp();
