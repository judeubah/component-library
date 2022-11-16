import './App.css';
import { Agenda } from './components/agenda/main';
import { global_agenda } from './components/agenda/data'
import { Navbar } from './components/nav_bar/script';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Holding_page_1 } from './components/holding_page/Format_1/Format_1';
import { site_info } from './components/holding_page/data';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      {/* <Agenda data={global_agenda}/> */}
      <Holding_page_1 site_info={site_info}/>
    </div>
    </Router>
  );
}

export default App;
