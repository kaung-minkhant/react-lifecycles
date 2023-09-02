import React, {Component} from "react";
import './life-cycles.styles.css';

class LifeCycles extends Component {
    constructor(props) {
        super(props)
        console.log('Constructor!')
    } 

    componentDidMount() {
        console.log('Component Mounted')
    }

    componentDidUpdate() {
        console.log('Component Updated!')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate!", nextProps);
        return nextProps.text !== this.props.text
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount!")
    }

    render() {
        console.log('Render!')
        return (
            <div>
                <h2> LIFECYCLE COMPONENTS </h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default LifeCycles;