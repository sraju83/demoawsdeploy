import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stylesheet from "./Stylesheet";
import Nav from "./Router/Nav";
import Shop from "./Router/Shop";
import About from "./Router/About";
// import Home from "./Router/Home";
// import ItemDetails from "./Router/ItemDetails";
//import CallAPI from "./CallAPI";
// import CallAPI2 from "./CallAPI2";
// import ComponentC from "./ComponentC";
// import {UserProvider} from "./userContext";
// import PostList from "./Component/PostList";
// import PostForm from "./Component/PostForm";
// import FragementDemo from "./Component/FragementDemo";
// import Table from "./Component/Table";
// import ClassCounter from "./Component/ClassCounter";
// import About from "./About";
// import Home from "./Router/Home";
// import Appchild from "./Appchild";
// import NameList from "./NameList";
// // const REACT_VERSION = React.version;
// import Baby from "./Baby";
// import Appv6 from "./Appv6";
// import EventHandler from "./EventHandler";
// import FunctionClick from "./FunctionClick";
// import ChildComponet from "./ChildComponet";
// import ParentComponent from "./ParentComponent";
// import UserGreeting from "./UserGreeting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SetState from "./SetState";
// import HooksBefore from "./Hooks/HooksBefore";
// import UseStateHook from "./Hooks/UseStateHook";
// import UseEffectHook from "./Hooks/UseEffectHook";
//version 5 for function
function App(props) {
  return (
    <Router>
      <div className="App">
        {/*
        <h3> this is app and {props.name} </h3>
        <h3>React version: {REACT_VERSION}</h3>
        <h3> Roll : {props.role} </h3>
        <h3> Sum : {props.sum} </h3>
        <h3> START RENDERING MULTIPLE COMPONET</h3>
        <Appchild name="parth" />
        <Appchild name="elishs" />
        <Appchild name="ayansh" />
        <h3> END RENDERING MULTIPLEE COMPONET</h3> 
        <FunctionClick name="Rahul from swindon"/>
        <UserGreeting/>
        <NameList/>  
        <Stylesheet /> 
        <CallAPI /> 
        <CallAPI2 /> 
        <UserProvider  value = "Elisha ComC to ComF"> 
        <ComponentC />
        </UserProvider> 
        <ComponentC /> 
        <PostList /> 
        <PostForm /> 
        <FragementDemo /> 
        <Table /> 
        <ClassCounter /> */}
        {/* <SetState />  */}
        {/* <HooksBefore name="Rahul Gandhi" /> */}
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        {/* <StyleSheet /> */}

        <Nav />
        <switch>
          {/* <Route path="/" exact component={SetState} /> */}
          <Route path="/About" component={About} />
          <Route path="/Shop" exact component={Shop} />
          {/* <Route path="/Shop/:id" component={ItemDetails} /> */}
        </switch>
      </div>
    </Router>
  );
}

export default App;

// there props.name not this.props.name in function
//import React from 'react'; elase error require is not Defined

//index.html - > index.js - > APP.js (3 child)
