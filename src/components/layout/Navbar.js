import React from 'react';
import { Link } from 'react-router-dom';

// --------------------------- FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBooks, faHomeLgAlt, faUsers, faUsersClass, faFileContract, faCog, faSignOut } from '@fortawesome/pro-duotone-svg-icons';

// --------------------------- Bootstrap
import { Navbar } from 'react-bootstrap';

// --------------------------- Images
import OH_main_image from '../../assets/images/OH_main.png';

const AppMenu = () =>
{
	return (
		// <!-- ----------------- NAVBAR ----------------- -->
		<Navbar className='navbar navbar-expand-lg navbar-dark'>
			<Navbar.Brand role='button'
			              to='/settings'>
				<img src={ OH_main_image }
				     alt='OWL & HORUS icon'
				     width='80'
				     id='OH_logo_navbar'/>
			</Navbar.Brand>
			<Navbar.Toggle type='button'
			        data-toggle='collapse'
			        data-target='#OH_navbar'
			        aria-controls='basic-navbar-nav'
			        aria-expanded='false'
			        aria-label='Toggle navigation'>
			</Navbar.Toggle>

			<Navbar.Collapse id='OH_navbar'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item __nav_item_active'>
						<Link className='nav-link'
						   role='button'
						   to='/'>
							<FontAwesomeIcon icon={ faHomeLgAlt } />
							<span className='__bottom_text __small_size'>Home</span>
							<p className='__high_light_line' />
						</Link>
					</li>

					<li className='nav-item __nav_item'
					    id='OH__nav_item_users'>
						<Link className='nav-link'
						   role='button'
						   to='/users'>
							<FontAwesomeIcon icon={ faUsers } />
							<span className='__bottom_text __small_size'>Users</span>
							<p className='__high_light_line' />
						</Link>
					</li>

					<li className='nav-item'
					    id='OH__nav_item_groups'>
						<Link className='nav-link'
						   role='button'
						   to='/groups'>
							<FontAwesomeIcon icon={ faUsersClass } />
							<span className='__bottom_text __small_size'>Groups</span>
							<p className='__high_light_line' />
						</Link>
					</li>

					<li className='nav-item'
					    id='OH__nav_item_cases'>
						<Link className='nav-link'
						   role='button'
						   to='/cases'>
							<FontAwesomeIcon icon= { faFileContract } />
							<span className='__bottom_text __small_size'>Cases</span>
							<p className='__high_light_line' />
						</Link>
					</li>

					<li className='nav-item'
					    id='OH__nav_item_investigations'>
						<Link className='nav-link'
						   role='button'
						   to='/investigations'>
							<FontAwesomeIcon icon={ faBooks } />
							<span className='__bottom_text __small_size'>Investigations</span>
							<p className='__high_light_line' />
						</Link>
					</li>
				</ul>

				<ul className='navbar-nav'>
					<li className='nav-item'
					    id='OH__nav_item_settings'>
						<Link className='nav-link'
						   role='button'
						   to='/settings'>
							<FontAwesomeIcon icon={ faCog } />
							<span className='__bottom_text __small_size'>Settings</span>
							<p className='__high_light_line' />
						</Link>
					</li>

					<li className='nav-item'
					    id='OH__nav_item_logout'>
						<Link className='nav-link'
						   role='button'
						   to='/logout'>
							<FontAwesomeIcon icon={ faSignOut } />
							<span className='__bottom_text __small_size'>Logout</span>
							<p className='__high_light_line' />
						</Link>
					</li>
				</ul>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default AppMenu;
