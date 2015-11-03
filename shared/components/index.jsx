import React from 'react';

export default class AppView extends React.Component {
    componentDidMount = () => {
        this.props.history.pushState(null, '/home');
    }

    render() {
        return (
            <div id="app-view">
                <h1>Todos</h1>
                <hr/>

                {this.props.children}
            </div>
        );
    }
}