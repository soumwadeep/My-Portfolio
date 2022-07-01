import React from 'react'
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import SideNav from "../../Components/SideNav";
import Footer from "../../Components/Footer";

const Todo = () => {
  return (
    <>
        <Header />
            <NavBar />
            <div className="container mt-5">
                <div className="row">
                    <SideNav />
                    <div className="col-sm-8">
                        <h2>Todo List</h2>
                        <h5>“Rename your “To-Do” list to your “Opportunities” list. Each day is a treasure chest filled with limitless opportunities; take joy in checking many off your list.”</h5>
                        <iframe src="https://soumwadeepguha.dev/Tools/TodoList/todo.html" title="Todo List Playground" className="todoframe" scrolling="no"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Todo