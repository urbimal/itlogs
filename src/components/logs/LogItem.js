import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLog, setCurrentLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
    const onDelete = () => {
        deleteLog(log.id)
        M.toast({ html: 'log deleted' })
    }
    return (
        <li className="collective-item">
            <div>
                <a href="3edit-log-modal" onClick={() => setCurrentLog(log)} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by {" "}
                    <span className="black-text">{log.tech}</span> on <Moment format="MMMM Da YYYY, h:mm:ss" />
                </span>
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrentLog: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrentLog })(LogItem)