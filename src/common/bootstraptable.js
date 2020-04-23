import React, { Component } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Table } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import ListService from "../service/homeService/ListService";
import HomeTableCss from "../css/home/tables/homeTable.css";

export default class TableBootstrap extends Component {
  constructor(props) {
    super(props);
    this.listService = new ListService();
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    this.listService.getListData(
      this.onResponse.bind(this),
      this.onFailure.bind(this)
    );
  }

  onResponse(result) {
    console.log("REST TABLE OK: " + result);
    this.setState({ listData: result });
  }

  onFailure(error) {
    console.log("REST TABLE FAILED: " + error);
    this.setState({ listData: null });
  }

  render() {
    const columns = [
      {
        dataField: "id",
        text: "ID",
        sort: true,
      },
      {
        dataField: "title",
        text: "Titolo",
        sort: true,
      },
      {
        dataField: "body",
        text: "Descrizione",
        sort: true,
      }
    ];

    return (
      <div className="table-bss">
        <BootstrapTable
          keyField="id"
          data={this.state.listData}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    );
  }
}
