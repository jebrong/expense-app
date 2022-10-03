import uuid from "uuid"


//Add Expense
export const addExpense = ({
    description = "", 
    note ="", 
    amount=0, 
    createdAt=0
    }={})=>({
        type:  "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt

        }
    })



//Edit Expense

export const editExpense = (id,updates)=>({

     type: "EDIT_EXPENSE",
     id,
     updates

})

//delete Expense

export const removeExpense= ({id})=>({
    type: "REMOVE_EXPENSE",
    id
})


const expensesReducerDefaultState = []

const expensesReducer = (state= expensesReducerDefaultState,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense 
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({id})=>{ return id !== action.id})

        case "EDIT_EXPENSE":
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })

        default:
            return state;
    }
}