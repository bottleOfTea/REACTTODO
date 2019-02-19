import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error
        });
    }

    render() {
        if (this.props.error || this.state.error) {
            return (
                <div className="container">
                    <div className="form-group has-error">
                        <label className="control-label">{this.props.error || this.state.error}</label>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

export default connect((state) => ({ error: state.general.error }))(ErrorBoundary);