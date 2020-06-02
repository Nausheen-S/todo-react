import React from 'react';
 import TodoItem from '../todoitem/todoitem';
 class ItemList extends React.Component {
     constructor(){
         super();
         this.state = {
         };
     }
     setDelete(index) {
         this.props.setDeleteItem(parseInt(index));
     }
     render() {
         const deleteItem = index=>{
             this.setDelete(index);
         }
         var displayList = this.props.completeList.map((list,index)=> {
               return <div><TodoItem index={index} list={list} delete={deleteTask}></TodoItem></div>
         });
         return (

                 {displayList}

             }
         }

 export default ItemList;