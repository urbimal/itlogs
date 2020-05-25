import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, techs: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null && techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>)
    )
}

TechSelectOptions.propTypes = {
    techs: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    techs: state.tech,
})

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)