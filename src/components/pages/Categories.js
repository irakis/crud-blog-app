import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getAllCategories } from '../../redux/categoriesRedux';
import List from '../views/List';

const Categories = () => {
    const allCategories = useSelector(getAllCategories);

    return (
        <div>
            <h2>
                Categories:
            </h2>
            <ul className="list-group">
                {allCategories.map((category) => <List category={category} key={category}/>)}
            </ul>
        </div>
    )
}

export default Categories;