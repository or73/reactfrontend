import { v4 as uuidV4 } from 'uuid';
import { $$_SET_ALERT, $$_REMOVE_ALERT } from './types';

export const $$_setAlert = ( msg, alertType, timeOut = 5000 ) => dispatch =>
{
	const id = uuidV4();
	dispatch(
		{
			type    : $$_SET_ALERT,
			payload : { msg, alertType, id }
		}
	);

	setTimeout( () => dispatch( { type : $$_REMOVE_ALERT, payload: id } ), timeOut );
};
