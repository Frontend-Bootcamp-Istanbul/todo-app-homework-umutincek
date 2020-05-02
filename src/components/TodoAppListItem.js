import React from 'react';
import {connect} from "react-redux";
import {toggleTodo,deleteTodo} from "../redux/actions";
import { bindActionCreators } from 'redux';



const TodoAppListItem = ({content, id, completed,toggleTodo,todos}) => {
    return (
        
        <div key={id} style={{
            textDecoration: completed ? "line-through" : "initial"
        }} >
            {content} 
            <button onClick={()=>deleteTodo(id)}>SİL</button>
        </div>
        
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        deleteTodo,
        toggleTodo
      },
      dispatch
    );
  };


export default connect(mapDispatchToProps)(TodoAppListItem);
