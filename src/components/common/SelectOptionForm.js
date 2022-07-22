import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux/es/exports';
import { getAllCategories } from '../../redux/categoriesRedux';
import Option from '../views/Option';

function SelectOptionForm(props) {
    const allCategories = useSelector(getAllCategories);
  return (
    <Form.Select>
      <option>{props.data}</option>
      {allCategories.map(category => <Option props={category} key={category}/>)}
    </Form.Select>
  )
}

export default SelectOptionForm;