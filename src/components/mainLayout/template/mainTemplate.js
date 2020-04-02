import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

export default class MainTemplate extends Component{
    render(){
        return(
        <div>
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
        );
    }
}