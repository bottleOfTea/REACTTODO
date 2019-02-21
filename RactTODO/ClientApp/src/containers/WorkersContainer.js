import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {loadWorkers, deleteWorker, getWorkers as update} from '../actions/actionCreaters'
import WorkList from '../components/worker/WorkList'
import {getWorkers} from '../reducers'
import {bindActionCreators} from 'redux'

class WorkersContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.loadWorkers(this.props);
    }

    handleClick = () => {
        this.props.update()
    }

    render() {

        const {workers, isLoading, deleteWorker} = this.props;
        return (
            <div>
                <h1 >Workers</h1>
                <button onClick={this.handleClick} className="btn btn-info">Update</button>
                {(isLoading && workers.length === 0) ? <h2>Loading...</h2> :
                    (!isLoading && workers.length === 0) ? <h2>No workers to display</h2> :
                        <WorkList workers={workers} deleteWorker={deleteWorker}/>}
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

const mapDispatchToProps = dispatch => ({
    update: bindActionCreators(update, dispatch),
    loadWorkers: bindActionCreators(loadWorkers, dispatch),
    deleteWorker: bindActionCreators(deleteWorker, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkersContainer))