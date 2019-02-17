import React, {Component} from 'react'
import WorkerForm from './WorkerForm'
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {WorkList} from "../components/worker";

class WorkerEditComponent extends Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }

    /*    render() {
            const {id} = this.props;
            return (
                <WorkerForm onSubmit={this.submit}/>
            )
        }*/
    render() {
        const {id} = this.props;
        return (
            <WorkerForm/>
        );
    }
}


const mapStateToProps = (state, ownerProps) => {
    const id = ownerProps.match.params.workId;
    return {
        id
    }
};

export default withRouter(connect(mapStateToProps)(WorkerEditComponent))