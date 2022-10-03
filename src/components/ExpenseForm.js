
import React from "react";
import moment from "moment";

import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'


const now = moment()


export default class ExpenseForm extends React.Component {
    state={
        description:"",
        note:"",
        amount:"",
        createdAt: moment(),
        calendarFocused: false,
        error: ""

    }
    onDescriptionChange = (e)=>{
        const description = e.target.value
        this.setState(()=>({description}))
    }
    onNoteChange = (e)=>{
        const note = e.target.value
        this.setState(()=>({
            note
        }))
    }
    OnAmountChange = (e)=>{
        const amount = e.target.value
        //regex101.com; if amount is a number with max 2 decimal places 
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)) {
            this.setState(()=>({amount}))
        }  

    }
    onDateChange = (createdAt)=>{
        if(createdAt){
        this.setState(()=>({createdAt}))
        }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }

    onSubmit = (e)=>{
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:"You have error"}))
           
            
            

        } else{
            this.setState(()=>({error:""}))
            console.log("No error")
            this.props.onSubmit({
                description:this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note:this.state.note 
            })

        }
    }
    render(){ 
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Desription"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.OnAmountChange}

                        />
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                        >
                        </SingleDatePicker>
                    <textarea
                        placeholder="Add a note for your expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        >
                    
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

