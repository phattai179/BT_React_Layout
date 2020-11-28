import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import PageContent from './PageContent'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PageContent/>
                <Footer/>
            </div>
        )
    }
}
