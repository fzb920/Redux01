// import React, { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css'
import './TodoList.css'
import {Input, Button, List} from 'antd'
const TodoListUI = (props)=>{
    return (
        <div className="TodoList">
                <div className="TodoList-content">
                    <Input 
                        placeholder='write Something'
                        style={{width:'300px',marginRight: '20px'}}
                        value={props.inputValue}
                        onChange={props.inputChange}
                    />
                    <Button type="primary" onClick={props.btnClick}>增加</Button>
                    <div style={{width: '350px',margin: '10px'}}>
                        <List
                            bordered
                            dataSource={props.list}
                            renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                        ></List>
                    </div>
                </div>
                
            </div>
    )
}


// class TodoListUI extends Component {
//     render() { 
//         return ( 
//             <div className="TodoList">
//                 <div className="TodoList-content">
//                     <Input 
//                         placeholder='write Something'
//                         style={{width:'300px',marginRight: '20px'}}
//                         value={this.props.inputValue}
//                         onChange={this.props.inputChange}
//                     />
//                     <Button type="primary" onClick={this.props.btnClick}>增加</Button>
//                     <div style={{width: '350px',margin: '10px'}}>
//                         <List
//                             bordered
//                             dataSource={this.props.list}
//                             renderItem={(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                         ></List>
//                     </div>
//                 </div>
                
//             </div>
//         );
//     }
// }
export default TodoListUI;

