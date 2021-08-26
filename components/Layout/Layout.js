import React from 'react'
import Header from './components/Header/Header'
import TopBar from './components/TopBar/TopBar'
import Footer from './components/Footer/Footer'

export default function Layout({children}) {
    return (
<>
<div className="kb-header">
<Header></Header>
<TopBar></TopBar>
</div>
<div className="container">
{children}
</div>
<Footer></Footer>
</>
    )
}
