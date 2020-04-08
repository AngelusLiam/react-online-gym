import React from 'react'
import PropTypes from 'prop-types'
import GymCss from '../css/gym/gym.css'


function TodoItem() {


    return(
        <div className="todo-item">
            <input type="checkbox"/>
            <p>Elemento della lista</p>
        </div>
    )
}

export default TodoItem