import React, { useState } from "react";
import "./Todo.scss";
import { Button } from "@mui/material";
const Todo = () => {
  const [display, setDispaly] = useState(false);
  const [input, setInput] = useState("");
  const [items, setitems] = useState([]);
  function handlesubmit(e) {
    e.preventDefault();
  }
  const handle = () => {
    if (input.length > 0) {
      setitems((curr) => {
        return [...curr, input];
      });
      setDispaly(true);
    } else {
      alert("Enter new task");
    }
    setInput("");
  };
  const deleteitem = (ind) => {
    if (items.length === 1) setDispaly(false);
    setitems((prev) => {
      return prev.filter((_, i) => {
        return i !== ind;
      });
    });
  };
  const handledel = () =>{
    if(items.length === 0 ){
      alert("No items to delete, please enter items before deleting.")
    }
    setDispaly(false);
    setitems([]);
    setInput("");
  }
  return (
    <div className="container">
      <h1>
        Todo App <i className="fa-sharp fa-regular fa-clipboard"></i>
      </h1>
      <div className="main">
        <form onSubmit={handlesubmit}>
          <label>New Task</label>
          <input
            type="text"
            placeholder="Enter task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <div className="btn-ad">
          <button type="button" onClick={handle}>
            ADD <i className="fa-solid fa-plus "></i>
          </button>
          <button type="button" onClick={handledel} style={{backgroundColor:"#d62222"}}>
            DELETE <i className="fa-solid fa-trash"></i>
          </button> 
          </div>
        </form>
      </div>
      {display && (
        <div className="display">
          {/* <div className="display-navbar">
          <input type="text" placeholder="Search Task" value={search} onChange={(e)=>setSearch(e.target.value)} />
          </div> */}
          List  :--
          {items.map((curr, ind) => {
            return (
              <div className="content" key={ind}>
                <div className="list">{curr}</div>
                <Button
                // style={{backgroundColor:"#000001",maxWidth:'50px'}}
                style={{maxWidth: '50px', maxHeight: '40px', minWidth: '70px'}}
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => deleteitem(ind)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todo;
