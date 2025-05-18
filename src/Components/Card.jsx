import React, { Component } from 'react'
// import './App.css'
import '../App.css'

export default class CourseCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const { name, price } = this.props.course
       
        return (
            <>
                <div className='container'>
                    <h2>{name}</h2>
                    <p>{price}</p>
                    <button>Buy</button>
                </div>
            </>
        )
    }
}