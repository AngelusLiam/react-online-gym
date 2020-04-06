import React, { Component} from 'react'
import CarouselCSS from '../../css/home/carousel/carousel.css'
import HomeCss from '../../css/home/home.css'
import FirstSlideImage from '../../images/img1.jpg'
import SecondSlideImage from '../../images/img2.jpeg'
import ThirdSlideImage from '../../images/img3.jpg'
import { Button } from 'react-bootstrap'
import TableBootstrap from '../../common/bootstraptable'
import ListService from '../../service/homeService/ListService'
import BootstrapTable from 'react-bootstrap-table-next'
import { Table } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


export default class Home extends Component{
  constructor(props){
    super(props);
    this.listService = new ListService() 
    this.state = {
      contatore: 0,
      listData: [],
      showTable: false,
    };
  }

  componentDidMount(){
  this.listService.getListData(
    this.onResponse.bind(this),
    this.onFailure.bind(this)
    )
  }

  onResponse(result){
    console.log("REST OK: " + result)
    this.setState({listData: result});
  }

  onFailure(error){
    console.log("REST FAILED: " + error)
    this.setState({listData: null})
  }

  aumentaCounter(){
    this.setState({contatore: this.state.contatore+1})
  }

    render(){
      const products = [];
        const columns = [{
        dataField: 'id',
        text: 'ID'
        }, {
        dataField: 'title',
        text: 'Titolo'
        }, {
        dataField: 'body',
        text: 'Descrizione'
        }];

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
          <h1>Contatore con hook</h1>
          <counter>{this.state.contatore}</counter><br/>
          <Button className="btn-counter" onClick={this.aumentaCounter.bind(this)}>Cliccami</Button>
            <div className="list-name">
        <BootstrapTable keyField='id' data={ this.state.listData } columns={ columns } pagination={paginationFactory()}/>
              </div>
          </div>
          </div>
        </div>
        </div>
        )
    }
}