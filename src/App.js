import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Fragment} from 'react'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Routes>
        <Fragment customClass="min_height">
          <Route path="/" element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newproject" element={<NewProject/>}/>
        </Fragment>
      </Routes>
    </Router>
  );
}

export default App;
