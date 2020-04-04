import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import PropTypes from 'prop-types';
import cardsCss from '../css/cards/cards.css';
import ReactCardFlip from 'react-card-flip';

export default class CustomCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFlipped:false
    }
    this.handleFlip = this.handleFlip.bind(this);
  }
    handleFlip(e){
      e.preventDefault();
      if(this.state.isFlipped){
        this.setState({isFlipped:false})
      } else {
        this.setState({isFlipped:true})
      }
    }

    render(){
        return(
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <Card className="card-bg" onMouseEnter={this.handleFlip}>
          <CardImg top width="100%" src={this.props.imgRef}/>
          <CardBody className="card-bd d-flex flex-column">
            <CardTitle>{this.props.titolo}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            {/*<Button className="mt-auto" onClick={this.handleFlip}>Altro</Button>*/}
          </CardBody>
        </Card>

        <Card className="card-bg" onMouseLeave={this.handleFlip}>
          <CardBody className="card-bd d-flex flex-column">
            <CardText>{this.props.description}</CardText>
            {/*<Button className="mt-auto" onClick={this.handleFlip}>Altro</Button>*/}
          </CardBody>
        </Card>

      </ReactCardFlip>
        )
    }
}

Card.propTypes = {
    // Pass in a Component to override default element
    imgRef: PropTypes.string,
    titolo: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    subtitle: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
  };