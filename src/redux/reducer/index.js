import {EMAILCHANGE, PASSWORDCHANGE, DATA} from '../action/type';
import {combineReducers} from 'redux';

//membuat niali awal dari email yang belum ada nialnya
const initalState = {
  email: '',
  password: '',
  data: 0,
};

//dibawah ini cuman manajement state aja kamu jiak bisa mengubahnya terserah
const reducer = (state = {initalState}, action) => {
  //membuat kondisi jika type sesuai dengan action.type yang telah kita buat difolder action maka akan mengembalikan action.payload / statenya itu sendiri
  switch (action.type) {
    case EMAILCHANGE:
      return {...state, email: action.payload};
    case PASSWORDCHANGE:
      return {...state, password: action.payload};
    case DATA:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

// supaya reducer bisa digunakan makan dipakailah combineReducers
// perlu diingat parameter state dan action diatas didapat dari combineReducer pasti kita terheran-2 action itu dapatnya dari mana?.
const appState = combineReducers({
  reducer,
});

export default appState;
