import { takeEvery , put} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'
//genrator
function* mySaga(){
    yield takeEvery(GET_MY_LIST , getList)
}

function* getList(){

    const res =  yield axios.get('https://www.fastmock.site/mock/294dc52b4ee30f2127ce87952cacd036/learnReact/getTodoList')
    const action = getListAction(res.data)
    yield put(action)
    // axios.get('https://www.fastmock.site/mock/294dc52b4ee30f2127ce87952cacd036/learnReact/getTodoList')
    //     // axios.get('https://easy-mock.com/mock/5ecb7f80490e7e079cc99664/ReactDemo01')
    //     // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    //     .then((res)=>{
    //         // console.log(res)
    //         const data = res.data;
    //         // console.log(data);
    //         const action = getListAction(data)
    //         put(action)
    //     })
}
export default mySaga