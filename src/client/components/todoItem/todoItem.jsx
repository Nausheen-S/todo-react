import React from 'react';

 class ToDoItem extends React.Component {
     constructor(){
         super();
         this.state = {
         };
     }
     delete(event) {
         this.props.delete(parseInt(event.target.value));
     }
     render() {
         return (
             <li>{this.props.index+1}. {this.props.list.task} -><button className="btn btn-danger"onClick={(event)=>{this.delete(event)}} value={this.props.index}>Remove</button></li>
               )

         }
     }

 export default ToDoItem;