import React, { Component } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

//apikey
const GOOGLE_API_KEY = "AIzaSyACTYym68zoTsukMZ9cAWm123nbMMvqk74";

class Search extends Component {
  state = {
    search: "",
    results: []
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.state.search +
          "&key=" +
          GOOGLE_API_KEY
      )
      .then(response => {
        this.setState({ results: response.data.items });
      });
  };

  handleSaveClick = event => {
    axios.post("/api/books", {
      title: event.target.getAttribute("data-title"),
      authors: event.target.getAttribute("data-authors"),
      description: event.target.getAttribute("data-description"),
      image: event.target.getAttribute("data-image"),
      link: event.target.getAttribute("data-link")
    });
  };

  render() {
    return (
      <div>
        <h2>Seach Book</h2>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults
          results={this.state.results}
          handleSaveClick={this.handleSaveClick}
        />
      </div>
    );
  }
}

export default Search;
