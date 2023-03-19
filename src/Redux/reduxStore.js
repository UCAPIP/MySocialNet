import { combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	navBar: navBarReducer,
	users: usersReducer
});

let store = createStore(reducers);

export default store;