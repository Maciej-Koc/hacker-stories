import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

// Testing different forms of arrow function
// const hello = () => 'Hello';
// hello = () => 'Hello';

//Arrow Function
const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search />

      <hr />
      <List list={stories} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

const Search = () => {

  //searchTerm is the current state, setSearchTerm is the function to update this state
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
};

export default App;
