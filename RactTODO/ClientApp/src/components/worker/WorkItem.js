import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';


const WorkItem = ({id, name}) => (
    <tr key={id}>
        <td>{name}</td>
        <td>
            <div className="btn-toolbar pull-right">
                <Link to={`/worker/${id}`} className="btn btn-primary">Edit</Link>
                <a onClick={()=>{}} className="btn btn-danger">Delete</a>
            </div>
        </td>
    </tr>
);

export default WorkItem;
WorkItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};

