import React from "react";
import { Link } from 'react-router-dom';
const List = ({category}) => {

    return (
        <Link to={"/Category/"+ category}>
            <li className="list-group-item">{category}</li>
        </Link>
    )
}
export default List;