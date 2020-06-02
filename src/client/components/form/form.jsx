import React from 'react';


class Form extends React.Component {
    constructor(){
        super()
        this.state={
            list:""
        }
    }

}
    handleChange(cuurentValue){
      this.setState({
        list:currentValue
        //errorMessage:""
      });
    }
    handleSubmit(event){
        this.props.setNewList(this.state.list);
        this.setState({list:""});
      /*var newList=this.state.list;
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
    }*/

    render() {
        console.log("rendering");

        /*var completeList = this.state.completeList.map(completeList=>{
            return(<li>{completeList}</li>)
        })*/
        return (
          <div className="item">
            <button onClick={(event)=>{this.handleSubmit()}}>Add to list</button>


            <input className={this.state.inputClass}  onChange={(event)=>{this.handleChange(event.target.value); }} value ={this.state.list}/>

          </div>
        );
    }

}

export default Form;