import React from "react";

const SearchResults = (props) => {

    const pageLinks = [];

    for(let i=1; i <= props.pages + 1; i++) {

        let active = props.currentPage === i ? 'active' : '';
        
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.adjacentPage(i)}><a href="#">{i}</a></li>)

    }

    return(
        <div>
            <ul className="pagination">
                {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.adjacentPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                {pageLinks}
                {props.currentPage < props.pages + 1 ? <li className={`waves-effect`} onClick={() => props.adjacentPage(props.currentPage + 1)}><a href="#">Next</a></li> : '' }
            </ul>
        </div>
    );

}

export default SearchResults;

