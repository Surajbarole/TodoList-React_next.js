"use client"
import React, { useState } from 'react'
import "./globals.css"


export default function App() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deletButton = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  const formhandle = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, discription }]);
    // console.log(mainTask)
    setTitle("");
    setDiscription("");
  };

  let render = <h5>No Task Available</h5>;
  if (mainTask.length > 0) {
    render = mainTask.map((task, index) => {
      return (
        <div id="addTask" key={index}>
          <div className="addtask">
            <h2 className="title">{task.title}</h2>
            <p>{task.discription}</p>
          </div>

          <button
            id="deleBtn"
            onClick={() => {
              deletButton(index);
            }}
          >
            Delete
          </button>
          {/* <button
            id="deleBtn"
            onClick={() => {
              completeButton(index);
            }}
          >
           complete
          </button> */}
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="logo-name bg-black text-white text-center content-center text-xl font-bold m-3 p-10 rounded-lg">
        <span className="p-2 text-3xl font-mono">Suraj</span> Todo List
      </h1>
      <form onSubmit={formhandle} className="bg-red form">
        <label>Task: </label>
        <input
          className="input1"
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label>Discription: </label>

        <input
          id="input2"
          type="text"
          placeholder="Enter Discription "
          value={discription}
          onChange={(e) => {
            setDiscription(e.target.value);
            // console.log(e.target.value)
          }}
        />
        <br />
        <button className=" taskBtn p-2 px-6 m-5 border-5 rounded  bg-black text-white">
          Add Task here
        </button>
      </form>
      <hr />
      <div>
        <ul>{render}</ul>
      </div>
    </>
  );
}
