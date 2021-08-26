import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link href="/">
            <img src='/logo.png' height="50px"/>
            </Link>
            <a className="navbar-brand">&nbsp;CafeSupremo</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
