import { createStore, combineReducers } from "redux";
import uuid from "uuid";


//Add Expense
const addExpense = ({
    description = "", 
    note ="", 
    amount=2, 
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
const editExpense = (id,updates)=>({

     type: "EDIT_EXPENSE",
     id,
     updates

})

//delete Expense
const removeExpense= ({id})=>({
    type: "REMOVE_EXPENSE",
    id
})

//Expenses Reducer
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

//Set filter
const setTextFilter=(text="")=>({
    type:"SET_TEXT_FILTER",
    text

})

//Sort By AMOUNT

const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"

})

//Sort By DATE
const sortByDate=()=>({
    type:"SORT_BY_DATE"

})

//Set start date
const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate

})

//Set end date

const setEndDate=(endDate)=>({
    type: "SET_END_DATE",
    endDate
})


//Filters Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "sample king",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state=filtersReducerDefaultState,action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
                
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }

        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate:action.endDate
            }

        default:
            return state
    }  
}


//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//Store Creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))


store.subscribe(()=>{

    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: "Rent", amount:100, createdAt:-21000}))
const expenseTwo = store.dispatch(addExpense({description: "Coffee", amount:1200, createdAt: -1000}))



// store.dispatch(removeExpense({id:expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:2500}))

// store.dispatch(setTextFilter("re"))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1250))
// store.dispatch(setEndDate())






const demoState = {
    expenses: [{
        id: "",
        description: "Jan Rent",
        note: "This is was the final payment for that address",
        amount: 9900,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}



