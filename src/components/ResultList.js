
import { Link } from "react-router-dom";
import Weather from "./Weather";


// This component renders search results
const ResultList = ({searchResults}) => {

    return (
        <div className="ResultList">
            {
                searchResults.map((item)=>{
                    return (
                        <div className="linkItem p-2 my-2">
                            <Link to={`/weather/${item.woeid}`}><h4>{item.title}</h4></Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ResultList;