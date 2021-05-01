import ResultList from "./ResultList";
import { useState, useEffect } from "react";
import "./Home.css";



// Search Bar component
const SearchBar = ({searchPlace}) => {

    // function to handle the search button click
    const handleSearch = () => {
        let query = document.querySelector('.queryInput').value;
        searchPlace(query);
    }

    return (
        <div className="searchBar my-3">
            <input onChange={handleSearch} className="queryInput" type="text" placeholder="enter the place..."></input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}



const Home = () => {
    
    // searchResults holds the fetched data
    const [searchResults , setSearchResults] = useState(null);

    


    // This function fetches data from the api and sets the data in the state variable
    const searchPlace = async (query) => {
        let res = await fetch(`https://www.metaweather.com/api/location/search/?query=${query}`);
        if(res.ok){
            // console.log(await res.json());
            let resData  = await res.json();
            setSearchResults(resData)
        }else{
            setSearchResults(null)
        }
        
    }




    return (
        <div className="home container">
            <SearchBar searchPlace={searchPlace} />
            { searchResults && <ResultList searchResults={searchResults} /> }
        </div>
    )
}


export default Home;