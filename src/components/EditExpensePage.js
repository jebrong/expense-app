// import React from "react";
// import { useParams } from 'react-router-dom'
// import { connect, Connect } from "react-redux";

// import ExpenseForm from "./ExpenseForm";


// const EditExpensePage = (props)=>{

//     let { id } = useParams(); 
//     console.log(props.expense)



//     return(
//     <div>
//         <ExpenseForm
//             expense= {props.expense}
//             onSubmit={(expense)=>console.log("updated, ", expense)}
//         />
//     </div>
//     )
// }


// const mapStateProps = (state)=>{

//     return{
//         expenses: state.expenses
//         }
//     }



// export default connect(mapStateProps)(EditExpensePage)



import React from "react"
 
// Hooks imports =>
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
 
import { editExpense } from '../actions/expenses'
import ExpenseForm from '../components/ExpenseForm'
 
 
// no need to pass props into the component =>
const Edit = () => {
    // Get the expenses array from the store =>
    const expenses = useSelector(state => state.expenses)
    // Get the id from the params =>
    const { id } = useParams()
    // Let you use navigate method to redirect after submit =>
    const navigate = useNavigate()
    // Give you access to dispatch method
    const dispatch = useDispatch()
 
    // Find the expense that match the id in the params =>
    const expense = expenses.find((expense) => expense.id === id)
 
    return (
        <ExpenseForm
            expense={expense}
            onSubmit={(expense) => {
                dispatch(editExpense(id, expense))
                navigate('/')
            }}
        />
    )
}
 
// no need to connect anything =>
export default Edit