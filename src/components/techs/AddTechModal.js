import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '') {
            M.toast({ html: 'please enter a firstName' })
        }
        if (lastName === '') {
            M.toast({ html: 'please enter a lastName' })
        }

        addTech({
            firstName,
            lastName
        })
        M.toast({ html: 'added' })
        setFirstName('');
        setLastName('');
    }

    return (
        <div id="add-tech-modal" className="modal" >
            <h4>new tech</h4>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <label htmlFor='firstName' className='active'>firstName</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field">
                    <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <label htmlFor='lastName' className='active'>lastName</label>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal)