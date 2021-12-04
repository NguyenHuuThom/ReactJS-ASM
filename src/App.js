import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import Menu from './components/MenuComponent';
import {STAFFS} from './shared/StaffLishComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        

        </Navbar>
        <Menu staffs={this.state.staffs} />
        
      </div>
    )
  }
}
//<p>commit lan 1</p>
//<p>commit lan 2</p>
//<p>commit lan 3</p>
//<p>commit lan 6 update app.js</p>
<p>commit lan 7 update app.js</p>


export default App;
