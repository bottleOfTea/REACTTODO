import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loadWorkers, deleteWorker } from '../actions/workers'
import  WorkList from '../components/worker/WorkList'
import {getWorkers} from '../reducers/'

class WorkersContainer extends Component {

    componentDidMount() {
        this.props.loadWorkers(this.props);
    }

    render() {
        const { workers, isLoading, deleteWorker} = this.props;
        return (
            <div>
                <h1>Workers</h1>
                {isLoading ? <span>Loading...</span> : <WorkList workers={workers} deleteWorker={deleteWorker}/>}
            </div>
        );
    }
}

WorkersContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    workers: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state, ownerProps) => {
    const workers = getWorkers(state);
    return {
        isLoading: state.workers.isLoading,
        workers
    };
};

export default withRouter(connect(mapStateToProps, { loadWorkers, deleteWorker})(WorkersContainer))