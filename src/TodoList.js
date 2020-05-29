import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './TodoList.css'
import {Input, Button, List} from 'antd'
// import store from './store/index.js'
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM }from './store/actionTypes'
import { changeInputAction , addItemAction , deleteItemAction }from './store/actionCreators'


export default class TodoList extends Component {

    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState();
        this.inputChange = this.inputChange.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.btnClick = this.btnClick.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }

    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-content">
                    <Input 
                        placeholder='write Something'
                        style={{width:'300px',marginRight: '20px'}}
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />
                    <Button type="primary" onClick={this.btnClick}>增加</Button>
                    <div style={{width: '350px',margin: '10px'}}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                        ></List>
                    </div>
                </div>
                
            </div>
        )
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
