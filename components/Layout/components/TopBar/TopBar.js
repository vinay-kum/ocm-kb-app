import React from 'react'

export default function TopBar() {
    return (
        <div className="site-search">
        <div className="container">
          <h2>How can we help?</h2>
          <form action="" className="site-search">
            <input
              type="text"
              className="search-field"
              placeholder="Search the knowledge base.."
              name="key"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    )
}
