import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({searchText}, {setSearchText}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            value={searchText}
            onChange={setSearchText}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )

}

function Hero({text}) {

  return (
    <div class="hero-container p-5 mb-2 bg-dark text-white ">{text}</div>
  )
}

function Home() {
  return (
    <>
      <Hero text='This is Home Section'/>
      <p className='m-5'>
        Duis cillum ex proident dolor cupidatat aliquip nulla veniam labore tempor voluptate adipisicing mollit ullamco. Magna voluptate commodo eiusmod proident cillum non voluptate adipisicing irure. Deserunt cupidatat magna cupidatat ipsum irure velit esse qui consectetur. Cupidatat duis duis ea nisi dolor duis laborum enim qui consectetur sunt dolore amet. Duis minim cillum ullamco aliqua duis tempor Lorem consequat reprehenderit ut occaecat. Excepteur ipsum excepteur enim Lorem labore officia cillum aliquip et in eiusmod minim.
        
      </p>
    </>
  )
}

function About() {
  return (
    <>
      <Hero text='This is the About Section'/>
      <p>Laborum culpa proident fugiat velit aute velit sit tempor est est sit ullamco et consequat.</p>
    </>
  )
}

function Search(){
  return(
    <Hero text='You are searching for '/>
  )
}


function App() {

  const [searchText, setSearchText] = useState([]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/About' Component={About} />
        <Route path='/Search' Component={Search}></Route>
      </Routes>

    </div>
  );
}

export default App;
