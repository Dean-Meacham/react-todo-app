import React from 'react';
import cancelImg from './images/cancel.svg';
import styled from 'styled-components';

const List = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 33px 0;
`
// const Cancel = styled.img`
//     height: 15px;
//     width: auto;
//     `

export default class Todo extends React.Component {
    render() {
        return (
            <List>
                <input type="checkbox" id="check" defaultChecked={this.props.todo.completed} />
                {this.props.todo.description}
                <img src={cancelImg} alt="cancel-icon" />
            </List>
        )
    }
}