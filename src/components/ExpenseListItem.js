import React from "react";
import { connect, Connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

import { Link } from "react-router-dom";


const ExpenseListItem = ({description,amount,createdAt,id,dispatch})=>(
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>
    
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
            dispatch(removeExpense({id}))
        }}
    >Remove</button>
    </div>
    
)




export default connect()(ExpenseListItem)