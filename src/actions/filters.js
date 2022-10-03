


//Set filter
export const setTextFilter=(text="")=>({
    type:"SET_TEXT_FILTER",
    text

})

//Sort By AMOUNT

export const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT"

})

//Sort By DATE
 export const sortByDate=()=>({
    type:"SORT_BY_DATE"

})

//Set start date
export const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate

})

//Set end date

export const setEndDate=(endDate)=>({
    type: "SET_END_DATE",
    endDate
})
