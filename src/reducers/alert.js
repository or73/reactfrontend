import { $$_SET_ALERT, $$_REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function ( state = initialState, action )
{
	const { type, payload } = action;
	switch ( type )
	{
		case $$_SET_ALERT:
			return [ ...state, payload ];
		case $$_REMOVE_ALERT:
			return state.filter( alert => alert.id !== payload );
		default:
			return state;
	}
}
