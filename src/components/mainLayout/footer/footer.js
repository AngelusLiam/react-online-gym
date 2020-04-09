import React, { Component } from 'react';
import FooterCss from '../../../css/footer/footer.css';


export default class Footer extends Component{
    render(){
        return(
            <div className='container-fluid footer'>
                <div className="icons">
                            <a href="https://www.facebook.com/angelusliam/" target="_blank">
                            <i className = "fa fa-facebook-official fa-2x"></i>
                            </a>
                            <a href="https://twitter.com/Dacambiare" target="_blank">
                            <i className = "fa fa-twitter fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/giuseppeloffredo/" target="_blank">
                            <i className = "fa fa-linkedin-square fa-2x"></i>
                            </a>
                            <a href="https://plus.google.com/u/0/angelusliam" target="_blank">
                            <i className = "fa fa-google-plus-official fa-2x"></i>
                            </a>
                            </div>
            </div>
        )
    }
}