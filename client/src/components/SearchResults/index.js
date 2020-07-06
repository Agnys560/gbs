import React from "react";
//
//searchresults

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(item => (
        <li key={item.id} style={{ clear: "both" }}>
          <button
            type="button"
            style={{ float: "right" }}
            className="btn btn-primary btn-sm"
            onClick={props.handleSaveClick}
            data-title={item.volumeInfo.title}
            data-authors={item.volumeInfo.authors.join(", ")}
            data-description={item.volumeInfo.description}
            data-image={item.volumeInfo.imageLinks.thumbnail}
            data-link={item.volumeInfo.canonicalVolumeLink}
          >
            Save
          </button>
          <img
            src={item.volumeInfo.imageLinks.thumbnail}
            alt="thumbnail"
            style={{ float: "left" }}
          />
          <a href={item.volumeInfo.canonicalVolumeLink}>
            {item.volumeInfo.title}
          </a>
          <br />
          by {item.volumeInfo.authors.join(", ")}
          <p>{item.volumeInfo.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
