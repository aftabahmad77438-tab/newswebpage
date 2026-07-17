import React from 'react'

export default function Navbar({setcategory}) {  
    return (

      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body"data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" ><span className="badge text-bg-danger">NEWS</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <div className='nav-link' onClick={()=>setcategory('sports')}>Sports</div>
              </li>
              <li className="nav-item">
                <div className='nav-link' onClick={()=>setcategory('health')}>Health</div>
              </li>
              <li className="nav-item">
                <div className='nav-link' onClick={()=>setcategory('science')}>science</div>
              </li>
              <li className="nav-item">
                <div className='nav-link' onClick={()=>setcategory('technology')}>Technology</div>
              </li>
             
              
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }

