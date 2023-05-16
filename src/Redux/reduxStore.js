import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogsReducer';
import navBarReducer from './navBarReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import userReducer from './userReducer';
import fileReducer from './fileReducer';


let rootReducer = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	navBar: navBarReducer,
	users: usersReducer,	
	user: userReducer, // -- с информацией о пользователе
	files: fileReducer // -- с информацией о файлах, получаемых с сервера
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

