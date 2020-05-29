import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const $$_NotFoundPage = () =>
{
	return(
		<Fragment>
			<h1>404 ERROR</h1>
			<h2>Page not found!</h2>
			<p>
				XXX - Required Path does not exist - XXX
			</p>
			<p> 
				<Link to='/'>Go back to the main page</Link>
			</p>
		</Fragment>
	);
};

export default $$_NotFoundPage;
