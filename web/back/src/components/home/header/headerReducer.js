export default function dictionary(state={},action){
	let _state = JSON.parse(JSON.stringify(state));
	// console.log(action)
	switch(action.type){
		case 'dictionary':
			_state.txt = action.txt
			break;
	}
	return _state;
}