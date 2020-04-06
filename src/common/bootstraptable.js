import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import { Table } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

export default class TableBootstrap extends Component{
    constructor(props){
        super(props);
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
            <BootstrapTable keyField='id' data={ products } columns={ columns } />
        )
    }
}
 