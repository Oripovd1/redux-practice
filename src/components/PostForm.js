import React, { Component } from 'react'

export default class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const { title } = this.state

        const newPost = {
            title, 
            id: Date.now().toString(),
        }
        
        this.setState({
            title: '',
        })

        console.log(newPost)
    }

    changeInputHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        id="title" 
                        className="form-control" 
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}