import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import PropTypes from 'prop-types';
import cardsCss from '../css/cards/cards.css';

export default class CustomCard extends Component{
    render(){
        return(
        <div className="div-cards">
        <Card className="card-bg">
          <CardImg top width="100%" src={this.props.imgRef}/>
          <CardBody className="card-bd">
            <CardTitle>{this.props.titolo}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.description}</CardText>
          </CardBody>
        </Card>
      </div>
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