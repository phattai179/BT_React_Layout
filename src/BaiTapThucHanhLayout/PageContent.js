import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductList from './ProductList'
import SideBar from './SideBar'

export default class PageContent extends Component {
    render() {
        return (
            <div className = 'mt-5'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideBar />
                        </div>

                        <div className='col-lg-9'>
                            <Carousel />
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
