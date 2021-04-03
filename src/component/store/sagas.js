import {takeEvery, put} from 'redux-saga/effects'
import axios from "axios";

import { GET_INIT_LIST, fetchInitList  } from "./action"

function* fetchList(){
    try{
        const res = yield axios.get("http://localhost:5000/items");
        const action = fetchInitList(res.data);
        yield put(action);
    }catch(e){
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchList);
}

export default mySaga;

