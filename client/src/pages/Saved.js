import React, { Component } from "react";
import axios from "axios";
//
//

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    axios.get("/api/books").then(response => {
      this.setState({
        books: response.data
      });
    });
  };

  handleDeleteClick = event => {
    axios.delete("/api/books/" + event.target.getAttribute("data-id"));
    this.loadBooks();
  };

  render() {
    return (
      <ul className="list-group">{this.state.books.map(item => (
        <li key={item._id} style={{clear: "both"}}>
          <button
            type="button"
            style={{ float: "right" }}
            className="btn btn-danger btn-sm"
            onClick={this.handleDeleteClick}
            data-id={item._id}
          >
            Delete
          </button>
          <img
            src={item.image}
            alt="thumbnail"
            style={{ float: "left" }}
          />
          <a href={item.link}>
            {item.title}
          </a>
          <br />
          by {item.authors}
          <p>{item.description}</p>

        </li>
      ))}</ul>
    );
  }
}

export default Saved;
