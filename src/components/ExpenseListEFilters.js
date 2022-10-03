import React from "react"
import { DateRangePicker } from "react-dates"
import { connect } from "react-redux"

import { setTextFilter,sortByDate,sortByAmount, setStartDate,setEndDate } from "../actions/filters"

 class ExpenseListFilters extends React.Component {

    state={
        calendarFocused: null,

    }
onDatesChange = ({startDate, endDate}) =>{
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
}

onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
}
 
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}>
                </input>

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        }else{
                            this.props.dispatch(sortByAmount())
                        } 
                    }}  
                
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    startDateId ="start"
                    endDateId="end"
                    numberOfMonths={1}
                    isOutsideRange={()=>false}

                />

             


             </div>
        )
    }
 }




  
const mapStateToProps = (state)=>{
    return{
        filters: state.filters
    }
}





export default connect(mapStateToProps)(ExpenseListFilters)