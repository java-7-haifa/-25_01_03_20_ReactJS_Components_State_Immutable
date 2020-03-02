import React, { Component } from "react";

export default class Counter extends React.PureComponent {
  static APP = "My App";
  state = {
    persons: getPersons()
  };

  //   constructor(props){
  //       super(props);
  //       this.changeName = this.changeName.bind(this);
  //   }

  addPerson = () => {
    let arr = [...this.state.persons];
    arr.push({ name: "Person 1", age: Math.floor(Math.random() * 70) + 1 });
    this.setState({ persons: arr });
  };

  addAge = (i) => {
    let arr = [...this.state.persons];
    // let p = {...arr[i]};
    // p.age = p.age+1;
    let p = {...arr[i],age:arr[i].age+1};
    arr[i] = p;
    
    this.setState({persons:arr});
    // this.state.persons[i].age = this.state.persons[i].age+1;
    // this.setState(this.state);
  }

  render() {
    let arr = this.state.persons.map((p, i) => {
      return (
        <li key={i} onClick={() => this.addAge(i)}>{`${p.name} - ${p.age}`}</li>
      );
    });
    return (
      <div>
        <button onClick={this.addPerson}>Add</button>
        <ul className="persons">{arr}</ul>
      </div>
    );
  }
}

function getPersons() {
  return [
    {
      name: "Vasya",
      age: 23
    },
    {
      name: "Petya",
      age: 32
    },
    {
      name: "Sofa",
      age: 24
    }
  ];
}
