import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const WorkItem = ({ id, name, deleteWorker}) => {
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>
                <div className="btn-toolbar pull-right">
                    <Link to={`/workers/${id}`} className="btn btn-primary">Edit</Link>
                    <div onClick={() => { deleteWorker(id)}} className="btn btn-danger">Delete</div>
                </div>
            </td>
        </tr>
    )
};

export default WorkItem;
WorkItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    deleteWorker: PropTypes.func.isRequired
};