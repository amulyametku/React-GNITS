import React from "react";
import Table from "./table/index";
import View from "./view/index";
import Form from "./form/index";
import Createlink from "./createlink/index"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";


const  tableHeaders = ['Id', 'Name' , 'Alias', 'Team'];


class App extends React.Component{

    state = {
       tableValues: []
    }

    constructor(props){
        super(props)
        this.createRecord = this.createRecord.bind(this)
    }

    componentDidMount() {
        let self = this;
        const request = new Request('/heroes', {method:'GET', headers:{"Content-Type":"application/json"}} )
        fetch(request)
        .then( res => res.json())
        .then( function(data){
            self.setState({'tableValues':data});
        });
    }
    createRecord(name, alias, team){
        console.log(name, alias, team)
        const ID = (Math.random() * 100).toString()
        const newRecord = [ID, name, alias, team]
        const newTableValues = [...this.state.tableValues]
        newTableValues.push(newRecord)
        this.setState({tableValues:newTableValues})
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/list" render={(props) => {
                        return  (
                                <div>
                                <Table 
                                    values ={this.state.tableValues} 
                                    headers={tableHeaders} 
                                    history = {props.history}
                                />                               
                                <br/><br/>
                                <Createlink/>  
                                </div>                  
                                )
                        }}/>

                    <Route exact path="/view/:id" component={View}/>                   
                  
                    <Route exact path="/create" render={(props) => {                       
                        return  <Form history = {props.history} formSubmitCallback={this.createRecord}/>
                     }}/>                          

                    <Redirect to="/list" />
                </Switch>
                
            </Router>
        );
    }
}

export default App;