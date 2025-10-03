import { ShowListStyles } from "../showList/showListStyles";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React from "react";

function ShowList({ //Function to display a list of shows that match the search query
    shows,
    loading,
    error,
}: {
    shows: any[];
    loading: boolean;
    error: string | null;
}) {
  return (
    <ShowListStyles>
        {/*Conditional loading based on the search results*/}
        {loading && <div className="load-anim-cont">
            <div className="loading-dots">
              <span style={{"--i":"1"} as React.CSSProperties}></span>
              <span style={{"--i":"2"} as React.CSSProperties}></span>
              <span style={{"--i":"3"} as React.CSSProperties}></span>
              <span style={{"--i":"4"} as React.CSSProperties}></span>
              <span style={{"--i":"5"} as React.CSSProperties}></span>
              <span style={{"--i":"6"} as React.CSSProperties}></span>
              <span style={{"--i":"7"} as React.CSSProperties}></span>
              <span style={{"--i":"8"} as React.CSSProperties}></span>
              <span style={{"--i":"9"} as React.CSSProperties}></span>
              <span style={{"--i":"10"} as React.CSSProperties}></span>
              <span style={{"--i":"11"} as React.CSSProperties}></span>
              <span style={{"--i":"12"} as React.CSSProperties}></span>
              <span style={{"--i":"13"} as React.CSSProperties}></span>
              <span style={{"--i":"14"} as React.CSSProperties}></span>
              <span style={{"--i":"15"} as React.CSSProperties}></span>
            </div>
          </div>}
        {error && <p className="loading-messages">{error}</p>}
        {!loading && !error && shows.length > 0 && shows.map((showObj: any) => (
        //Displays each search result as a link to the show's details page 
        <Link to={`/show/${showObj.show.id}`} data-id={showObj.show.id} key={showObj.show.id}>
          <div className="show-margin-container">
            <div className="show_container">
              <h1>{showObj.show.name}</h1>
              {showObj.show.image && showObj.show.image.medium ? (
                <img
                  src={showObj.show.image.medium}
                  alt={showObj.show.name}
                  onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="no-image">
                  <FontAwesomeIcon icon={faCircleXmark} />
                  No image available
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
      {/* Loading message if there are no results, error or loading happening */}
      {!loading && !error && shows.length === 0 && (
          <p className="loading-messages"></p>
        )}
    </ShowListStyles>
  );
}

export { ShowList };