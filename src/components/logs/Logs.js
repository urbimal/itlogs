import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LogItem from './LogItem'
import Preloader from '../layouts/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    if (loading || logs === null) {
        return <Preloader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <p className="center">System Logs</p>
            </li>
            {!loading && logs.length === 0 ? (
                <p className="center">No logs</p>
            ) : (
                    logs.map(log => <LogItem log={log} key={log.id} />)
                )}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);