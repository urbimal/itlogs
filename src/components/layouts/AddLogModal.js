import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '') {
            M.toast({ html: 'please enter a message' })
        }
        if (tech === '') {
            M.toast({ html: 'please enter a tech' })
        }
        const newLog = {
            message,
            attention,
            tech,
            date: new Date()
        }
        addLog(newLog);
        M.toast({ html: 'log added by ' + tech })
        setMessage('');
        setTech('');
        setAttention(false);
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <h4>Enter System Log</h4>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                    <label htmlFor='message' className='active'>log message</label>
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

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}

export default connect(null, { addLog })(AddLogModal)