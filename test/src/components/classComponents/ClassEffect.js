import React from "react";
//in class don't have useEffect just have ComponentDidMount and ComponentDidUpdate

export default class ClassEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <h1>Class Effect</h1>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        )
    }

}