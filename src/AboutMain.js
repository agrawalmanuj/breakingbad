import React from 'react'
import About from './About'

const AboutMain = (props) => {
   
    if(!('data' in props.location)){
        return (
            <div>
                <h1>Authentication Failed...Please go back to the Home Page</h1>
            </div>
        )
    }
    return (
        <div>
            <About props={props}/>
        </div>
    )
}

export default AboutMain
