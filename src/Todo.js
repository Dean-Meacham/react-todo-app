import React from 'react';
import cancelImg from './images/cancel.svg';

const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '33px 0',
}

export default class Todo extends React.Component {
    render() {
        return (
            <li style={listStyle}>
                <input type="checkbox" id="check" defaultChecked={this.props.todo.completed} />
                {this.props.todo.description}
                <img src={cancelImg} alt="cancel-icon" />
            </li>
        )
    }
}