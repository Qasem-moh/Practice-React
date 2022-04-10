import React from "react";

export default class HookClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0, color: "red"
        }
    }


    render() {
        return (<>
            <div className='container' style={{backgroundColor: this.state.color, height: '100vh'}}>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
                {/*<input type="text" value={this.state.color}*/}
                {/*       onChange={(e) => this.setState({color: e.target.value})}/>*/}
                <input type='text' onChange={(e) => this.setState({color: e.target.value})}/></div>
            <div>

            </div>
        </>);
    }
}