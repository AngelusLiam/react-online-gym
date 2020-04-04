import React, { Component } from 'react'
import CarouselCSS from '../../css/carousel/carousel.css'
import FirstSlideImage from '../../images/img1.jpg'
import SecondSlideImage from '../../images/img2.jpeg'
import ThirdSlideImage from '../../images/img3.jpg'



export default class Home extends Component{
    render(){
        return(
          <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={FirstSlideImage} alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={SecondSlideImage} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={ThirdSlideImage} alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
          <h2>I nostri prodotti</h2>
          </div>
          </div>
        </div>
        </div>
        )
    }
}