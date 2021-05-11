import React, { Component, Fragment } from 'react'

import List from './List';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                    <a href="/" className="navbar-brand mx-3">MovieApp</a>
                </nav>
                <main className="bg-dark">
                    <div className="container">
                        <List></List>
                    </div>
                </main>
            </Fragment>
        )
    }
}
