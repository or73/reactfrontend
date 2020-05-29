import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

const $$_Alert = ( { alerts } ) =>
	alerts !== null
	&& alerts.length > 0
	&& alerts.map( ( alert ) =>
		               (
		               	<Alert key={ alert.id }
		                     className={ `alert alert-${ alert.alertType } __alert_msg __alert_msg_${ alert.alertType }` }>
			                { alert.msg }
		               	</Alert>
                        ) );

$$_Alert.propTypes =
	{
		alerts: PropTypes.array.isRequired
	};

const mapStateToProps = state => (
	{
		alerts: state.alert
	} );

export default connect( mapStateToProps )( $$_Alert );
