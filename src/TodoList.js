import React, { Component } from 'react'
import TodoListUI from './TodoLIstUI'
// import store from './store/index.js'
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM }from './store/actionTypes'
import {getMyListAction, changeInputAction , addItemAction , deleteItemAction  }from './store/actionCreators'

export default class TodoList extends Component {

    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state = store.getState();
        this.inputChange = this.inputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.btnClick = this.btnClick.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                inputChange={this.inputChange}
                btnClick={this.btnClick}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        )
    }
    // 组件已经被渲染到 DOM 中后运行
    componentDidMount(){
        // const action = getTodoList()
        // store.dispatch(action)

        //Saga
        const action = getMyListAction()
        store.dispatch(action)
    }
    inputChange(e){
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        const action = changeInputAction(e.target.value)
        
        store.dispatch(action)
    }

    btnClick(){
        // const action = {type:ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        // console.log(index)
        // const action = {
        //     type : DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }
}
