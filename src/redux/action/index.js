import {EMAILCHANGE, PASSWORDCHANGE, DATA} from './type'; //ketika aplikasi besari kita harus memisahkan type / setempel setiap state yang kita buat

const emailChange = text => {
  //memberi tanda setiap text yang akan masuk keredux supaya store mengetahui setiap data apa yang masuk pada nya, jadi ketika pemanggilan tidak sulit
  //membaeri type pada setiap statenya
  return {
    type: EMAILCHANGE,
    payload: text,
  };
};

const passwordChange = text => {
  return {
    type: PASSWORDCHANGE,
    payload: text,
  };
};

const dataid = text => {
  return {
    type: DATA,
    payload: text,
  };
};

export {passwordChange, emailChange, dataid};
