//Higher Order Component (HOC)

import React from "react"
import ReactDOM from 'react-dom'

const Info = (props)=>(
    <div>
        <h3>(This is  authorized inner text)</h3>
        <p>Props:{props.info}</p>
        {props.isAdmin === true && <p>This is admin speaking</p>}

    </div>
)

// const withAdminWarning = (WrappedComponent)=>(
//      (props)=>(
//     <div>
//     <p>This is outer shell</p>
//     <WrappedComponent {...props}/>
//     </div>
//  )
// )

const requireAuthenticationInfo = (WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated === true ? <WrappedComponent {...props}/>: <p>You have no access</p>}
        
        </div>
    )
}



// const AdminWarning = withAdminWarning(Info)
const AuthInfo = requireAuthenticationInfo(Info)



// ReactDOM.render(<AdminWarning info="This is a paragaph" isAdmin={true}/>, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Hello 2nd layer" />, document.getElementById("app"))