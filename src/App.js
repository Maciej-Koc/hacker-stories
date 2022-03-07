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
  
  //searchTerm is the current state, setSearchTerm is the function to update this state
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />
      <List list={searchedStories} />
    </div>
  );
};

const List = ({list}) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({
item: {
  title,
  url,
  author,
  num_comments,
  points,
},
}) => (
  <li>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </li>
);

const Search = ({search, onSearch}) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />

  </div>
);

export default App;
