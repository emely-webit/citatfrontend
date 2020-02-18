import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import AdministratorCitat from './components/citat/AdministratorCitat';
import AdministratorKategori from './components/kategori/AdministratorKategori';
import RetKategori from './components/kategori/RetKategori';
import OpretKategori from './components/kategori/OpretKategori';
import SletKategori from './components/kategori/SletKategori';
import RetCitat from './components/citat/RetCitat';
import OpretCitat from './components/citat/OpretCitat';
import SletCitat from './components/citat/SletCitat';
import AlleCitater from './components/citat/AlleCitater';
import UdvalgtCitat from './components/citat/UdvalgtCitat';
import UdvalgtKategori from './components/kategori/UdvalgtKategori';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/alle_citater" component={AlleCitater} />
        <Route path="/udvalgt_citat/:citid" component={UdvalgtCitat} />
        <Route path="/udvalgt_kat/:katid" component={UdvalgtKategori} />
        <Route path="/kategorier" />
        <Route path="/administrator" />
        <Route path="/citat_admin" component={AdministratorCitat} />
        <Route path="/kat_admin" component={AdministratorKategori} />
        <Route path="/kat_ret" component={RetKategori} />
        <Route path="/kat_opret" component={OpretKategori} />
        <Route path="/kat_slet" component={SletKategori} />
        <Route path="/citat_ret" component={RetCitat} />
        <Route path="/citat_opret" component={OpretCitat} />
        <Route path="/citat_slet" component={SletCitat} />
      </BrowserRouter>
    </div>
  );
}

export default App;
