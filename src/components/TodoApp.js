import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

class TodoApp extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <TodoAppHeader/>
                <TodoAppList />
            </div>
        );
    }
}

export default TodoApp