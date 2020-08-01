import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import '../../public/styles/style.css';
import '../../public/styles/style2.css';
import '../../public/styles/style3.css';
import '../../public/styles/style4.css';
import '../../public/styles/style5.css';
import '../../public/styles/style6.css';
import '../../public/styles/style7.css';
import '../../public/styles/planchet.css';
import '../../public/styles/planchet2.css';
import '../../public/styles/ipad.css';
import '../../public/styles/mobile1.css';
import '../../public/styles/mobile2.css';
import '../../public/styles/mobile3.css';
import '../../public/styles/mobile4.css';
import '../../public/styles/mobile5.css';
import '../../public/styles/mobile6.css';
import '../../public/styles/mobile7.css';
import '../../public/styles/mobile8.css';
import '../../public/styles/mobile9.css';
import '../../public/styles/mobile10.css';
import '../../public/styles/mobile11.css';
import '../../public/styles/mobile12.css';
import '../../public/styles/menu.css';
import '../../public/styles/mobile_profile1.css';
import '../../public/styles/mobile_profile2.css';

class App extends React.Component {
  render() {
    return (
      <div className='main_wrap'>
          <Switch>
              {routes.map((route, i) => (
                <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.component}
                />
              ))}
          </Switch>
      </div>
    )
  }
}

export default App;
