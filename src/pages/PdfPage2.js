import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class PdfPage2 extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    file: {
      url: "http://localhost/api/tasks/1/pdf",
      httpHeaders: {
        'Authorization': `Basic ${localStorage.getItem("token")}`
      }
    }
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="content-wrapper" style={{minHeight: '498px'}}>
        <content>
        <Document
          file = {this.state.file}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >

          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </content>
      </div>
    );
  }
}

export default PdfPage2;