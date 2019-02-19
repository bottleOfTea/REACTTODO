import React, { Component } from 'react';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import WorkFormTemplate from '../components/worker/WorkFormTemplate';
import { getWorker } from '../reducers';
import { compose } from 'redux';
import { editWorker } from '../actions/workers';
import { withRouter } from 'react-router-dom'

class WorkerEditComponent extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);

    }

    componentWillMount() {
    }

    onEdit(values) {
        const { editWorker, history } = this.props;
        editWorker(values).then(() => { history.push('/workers'); });
    }

    render() {
        const onSubmit = this.props.workId ? this.onEdit : this.onEdit;
        return (
            <div>
                <h2>Edit User </h2>
                <WorkFormTemplate onSubmit={onSubmit} {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownerProps) => {
    const workId = ownerProps.match.params.workId;
    return {
        initialValues: getWorker(state, workId),
        workId
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, { editWorker }),
    reduxForm({
        form: 'workerEdit',
        enableReinitialize: true
    })
)(WorkerEditComponent);