import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {

    constructor(){
      super()
      this.state = {
        list:"",
        completeList : []
      }
      //this.handleChange = this.handleChange.bind(this);
      //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({
        list:event.target.value,
        errorMessage:""
      });
    }
    handleSubmit(event){
        //var list=event.target.value
      //this.setState({
      //  completeList:[list, ...this.state.completeList],
       // list:""

      //});
      var newList=this.state.list;
    if(newList.length<3||newList.length>200){
        console.log("if works");
        //alert("Length mismatch");

        this.setState({
            errorMessage:"length mismatch",
            inputClass:"banana",

    })

    }else{
        var newList=this.state.completeList;
        newList.push(this.state.list);
        this.setState({list:""});

      //event.preventDefault();
    }
    }

    render() {
        console.log("rendering");

        var completeList = this.state.completeList.map(completeList=>{
            return(<li>{completeList}</li>)
        })
        return (
          <div className="item">
            <button onClick={(event)=>{this.handleSubmit()}}>Add to list</button>
            <ul>{completeList}</ul>
            <p>{this.state.errorMessage}</p>
            <input className={this.state.inputClass}  onChange={(event)=>{this.handleChange(event); }} value ={this.state.list}/>

          </div>
        );
    }

}

export default hot(module)(App);