import React from 'react';
import PropTypes from "prop-types";
import WorkItem from "./WorkItem";

const WorkList = ({ workers, deleteWorker }) => (
    <table className="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {workers.map(worker => WorkItem({ ...worker, deleteWorker}))}
        </tbody>
    </table>
);

WorkList.propTypes = {
    workers: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired,
    deleteWorker: PropTypes.func.isRequired
};

export default WorkList;