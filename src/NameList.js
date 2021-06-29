import React from "react"; //rfce
import Person from "./Person";

function NameList() {
  //type 1
    // const names = ["Bruse", "Clark", "Diana"];
    // const nameList = names.map((name) => <h3>{name}</h3>); //name is the default value which holds an array that can be any name
    // return <div>{nameList}</div>;
    // // return (
    // //     <div>
    // //           {/* <h3>{name[0]}</h3>
    // //           <h3>{name[1]}</h3>
    // //           <h3>{name[2]}</h3> */}
    // //           {/* //use of the Map */}
    // //           {nameList}
    // //     </div>
    // // );
  //const personList = persons.map(p => <h3>{name}</h3>) //type 1

  //type 2
  const persons = [
    {
      id: 1,
      name: "tanmay",
      age: 5,
      skill: "react",
    },
    {
      id: 2,
      name: "Elsha",
      age: 3,
      skill: "nodejs",
    },
    {
      id: 3,
      name: "parth",
      age: 13,
      skill: "mongoDB",
    },
  ];

  // /type 2
  // const personList = persons.map(person =>
  //     <h3>
  //         I am {person.name} having age {person.age} and my skill are {person.skill}
  //     </h3>)
  //     //person is object so name can be any thing
  
  const personList = persons.map(value => <h3>{value.name}</h3>) //shortcut to above

  return <div>{personList}</div>

  // /type 3 - make new class of person and then take all thease to that place
  // remove the <h3> tage to the person.js and pass the person praameter
  // issue index.js:1 Warning: Each child in a list should have a unique "key" prop.
  // const personList = persons.map((person) => <Person person={person} />);
  // return <div>{personList}</div>;

  //issue index.js:1 Removed above warnign by addignkey  key help to remove the warning in the browser
  // const personList = persons.map((person) => <Person key= {person.id}  person={person } />);
  // return <div>{personList}</div>;



}

export default NameList;
