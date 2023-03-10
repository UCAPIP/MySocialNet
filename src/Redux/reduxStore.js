import { combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';


let reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	navBar: navBarReducer
});

let store = createStore(reducers);

export default store;