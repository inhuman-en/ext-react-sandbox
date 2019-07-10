import React, { Component, Fragment } from 'react';
import { Panel } from '@sencha/ext-modern';
import { renderWhenReady } from '@sencha/ext-react';
import { ExtReact } from '@sencha/ext-react';
import { connect } from 'react-redux';

const mapStateToDummy = state => ({
    text: 'connected dummy'
});
const Dummy = ({ text = 'not connected dummy' }) => <span>{text}</span>;
const ConnectedDummy = connect(mapStateToDummy)(Dummy);

class App extends Component {
    render() {
        return (
            <Fragment>
                <div>before extreact</div>
                <ExtReact>
                    <Panel title="i m a panel">
                      <ConnectedDummy />
                    </Panel>
                </ExtReact>
                <div>after extreact</div>
            </Fragment>
        );
    }
}

const mapStateToApp = state => ({
    text: state.hello
});

export default renderWhenReady(connect(mapStateToApp)(App));
