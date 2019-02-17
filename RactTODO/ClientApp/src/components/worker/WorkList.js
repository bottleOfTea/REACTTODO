import React from 'react';
import PropTypes from "prop-types";
import WorkItem from "./WorkItem";
import {Grid} from 'react-bootstrap';

export const WorkList = ({workers}) => (
    <table className="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {workers.map(worker => WorkItem({...worker}))}
        </tbody>
    </table>
);

WorkList.propTypes = {
    workers: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }).isRequired,
};

