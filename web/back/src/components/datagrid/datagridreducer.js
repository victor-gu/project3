import * as constants from './datagridconstants'

export default function datagrid(state={},action){
	let _state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case constants.Requesting:
			_state.show = true;
			break;
		case constants.Requested:
			_state.show = false;
			if(action.name){
				 _state[action.name] = _state[action.name] || {};
				 _state[action.name].dataset = action.result;
				 _state[action.name].count = action.count
				 _state[action.name].pageDefault = action.pageDefault;

			}else{
				_state.dataset = action.result;
				_state.count = action.count;
				_state.pageDefault = action.pageDefault
			}
			break;
		case constants.RequestError:
			 _state.show =false;
            _state.error = action.error;
            break;

	}
	return _state;
}