import React, { Fragment, useState } from 'react';
import { connect }                   from 'react-redux';
import { $$_setAlert }               from '../../actions/alert';
import PropTypes from 'prop-types';

// --------------------------- Bootstrap
import {
	Button,
	Form,
} from 'react-bootstrap';

// --------------------------- Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/pro-duotone-svg-icons';

// --------------------------- Images
import OH2_image from '../../assets/images/OH2.png';

// import axios                         from 'axios';
// import { selectFields }              from 'express-validator/src/select-fields';

const $_regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // $_regex_password = /^(?=.{6,20}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[~`!@#$%^&*()-_+={}[]|;:"<>,.\/?]W).*$/;

const $$_Login = ( { $$_setAlert } ) =>
{
	const [ formData, setFormData ] = useState(
			{
				email: '',
			    password: '',
			    validEmail: false,
			    validPassword: false,
			    showHidePassword: false,
			} ),
	      {
	      	email,
		    password,
		    validEmail,
		    validPassword,
		    showHidePassword,
	      } = formData,
	      __onChange = e =>
			{
				const $_fieldName = e.target.name.toLowerCase()

				// setFormData( { ...formData, [ e.target.name ]: e.target.value } )
				switch ( $_fieldName )
				{
					case 'email':
						setFormData(
							{ ...formData,
								email: e.target.value,
								validEmail: $_regex_email.test( email )
							} );
						break;
					case 'password':
					    setFormData( {
						                 ...formData,
						                 password: e.target.value,
						                 validPassword: password.length > 6
					    } );
					    break;
					default:
						break;
				}
			},
	      __showHidePass = e =>
			{
				e.preventDefault();
				document
					.getElementById( 'OH_showPass_icon')
					.classList
					.toggle( 'fa-eye' );
				document
					.getElementById( 'OH_showPass_icon')
					.classList
					.toggle( 'fa-eye-slash' );
				setFormData( { ...formData, showHidePassword: !showHidePassword } );
			},
	      __onSubmit = async e =>
			{
				e.preventDefault();

				if ( email.length > 0  && password.length > 0 )
				{
				    console.log( 'SUCCESS' );
					$$_setAlert( 'Success', 'success', 3000 );
				}
				else
				{
				    console.log( 'At least one field is pending');
				    $$_setAlert( 'At least one field is pending', 'danger', 4000 );
				}
			};

// <!-- ----------------- FORM ----------------- -->
// <!-- ----------------- FORM - FIELD INPUT WITH FLOAT LABEL - LOGIN + SHOW/HIDE PASSWORD  ----------------- -->
	return(
		<Fragment>
			<section className='__main_section container-fluid d-flex h-100 __container'
			         id='OH_login'>
				<div  className='row justify-content-center align-self-center __inputForm'>
					<header className='text-center __title_smallCaps'>
						<img src={ OH2_image } alt='OWL & HORUS logo' width='400'/>
						<h2 className='__margin_bottom_2rem'>Login</h2>
					</header>

					<Form onSubmit={ ( e ) => __onSubmit( e ) }
					      id='OH_form_login'>

						<Form.Group className='form-group __inputBox'>
							<Form.Control type='email'
							       className='form-control __input_animation'
							       id='OH__email'
							       name='email'
								   onChange={ e => __onChange( e ) }
								   autoComplete='off'
								   value={ email }
							       required />
							<Form.Label htmlFor='OH__email'
							       className={ email.length > 0
							                   ? '__label_animation __active'
							                   : '__label_animation' }>
								Email
							</Form.Label>
							<Form.Text className='__margin_bottom_1rem __text_danger __text_warning_input_black'
							   id='OH_email_validation_message'
							   hidden={ validEmail }>
								Input a valid email
							</Form.Text>
							<Form.Text className='__margin_bottom_1rem __text_success __text_warning_input_black'
							   id='OH_email_validation_message'
							   hidden={ !validEmail  }>
								Valid email format
							</Form.Text>
						</Form.Group>

						<Form.Group className='form-group __inputBox'>
							<Form.Control type={ showHidePassword
							              ? 'text'
							              : 'password' }
							       className='form-control __input_animation'
							       id='OH__password'
							       name='password'
								   onChange= { e => __onChange( e ) }
								   autoComplete='off'
								   value={ password }
							       minLength='6'
							       required />

							<span id='OH__showPass'
								onClick={ e => __showHidePass( e ) }>
								<FontAwesomeIcon icon={ faEye }
				                   id='OH_showPass_icon'>
				                </FontAwesomeIcon>
							</span>

							<Form.Label htmlFor='OH__password'
							       className={ password.length > 0
							                   ? '__label_animation __active'
							                   : '__label_animation' }>
								Password
							</Form.Label>
							<Form.Text className='__margin_bottom_1rem __text_danger  __text_warning_input_black'
							   id='OH_password_validation_message'
							   hidden={ validPassword }>
								Password length must be > 6 characters
							</Form.Text>
							<Form.Text className='__margin_bottom_1rem __text_success __text_warning_input_black'
							   id='OH_password_validation_message'
							   hidden={ !validPassword }>
								Password valid format
							</Form.Text>
						</Form.Group>

						<div className='text-center __display_block __margin_top_2rem'>
							<Button type='submit'
							       className={ ( validEmail && validPassword )
							                   ? 'btn btn-success __btn'
							                   : 'btn btn_dark __btn __btn_disabled'}
							       name='inputFormButton'
							       id='OH_logging_button_submit'
							       disabled={ !( validEmail && validPassword ) } >
								Login
							</Button>
						</div>
					</Form>
				</div>
			</section>
		</Fragment>
	)
}

$$_Login.propTypes =
	{
		$$_setAlert: PropTypes.func.isRequired
	};

export default connect(null, { $$_setAlert } )( $$_Login );
