import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = ({ current, updateLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech)
        }
    }, [current])

    const onSubmit = () => {
        if (message === '') {
            M.toast({ html: 'please enter a message' })
        }
        if (tech === '') {
            M.toast({ html: 'please enter a tech' })
        }
        const updLog = {
            id: current.id,
            message,
            attention,
            tech,
            date: new Date()
        }

        updateLog(updLog);
        M.toast({ html: 'log updated by' + tech })
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <h4>Enter System Log</h4>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                        <option value="" disabled>select technician</option>
                        <TechSelectOptions />
                    </select>
                </div>
            </div>

            <div className="row">

                <div className="input-field">
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                            <span>needs attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">enter</a>
            </div>
        </div>
    )
}


const modalStyle = {
    width: '75%',
    height: '75%',
    padding: '5%'
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)