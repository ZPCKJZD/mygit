import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './admin.less'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
export default class Admin extends Component {
    render() {
        return (
            <div>
                <div id="loading">
                    <img src="./assets/load.gif" alt=""/>
                </div>
                <Row className="container">
                    <Col span={4} className="nav-left">
                        <Nav/>
                    </Col>
                    <Col span={20} className="main">
                        <Header/>
                        <Row className="main-page">
                           {this.props.children}
                        </Row>    
                        <Footer/>   
                    </Col>
                </Row>
            </div>
        )
    }
}
