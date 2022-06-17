import React from 'react'

class MainPage extends React.Component{
    constructor(props){
        super(props)
        console.log("Constructor")
        this.state = {
            // console.log("Constructor State")
            principle : "Anvesh",
            qualityOfWork: 0,
        }
    }
    Increment = ()=>{
        this.setState({qualityOfWork: this.state.qualityOfWork+1})
    }
    Decrement = ()=>{
        this.setState({qualityOfWork: this.state.qualityOfWork-1})
    }

    componentWillMount(){
        console.log('WillMount')
        console.log("\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"")
    }

    componentDidMount(){
        console.log('DidMount')
        console.log("\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"")
    }

    componentWillUnmount(){
        console.log('WillUnmount')
        console.log("\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"")
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('DidUpdate')
        console.log("\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"")
    }


    render(){
        console.log("Render")
        return (
            <div>
                <h1>ಇದು ನಮ್ಮ ಶಾಲೆ</h1>
                <p>Hi hello ನಮಸ್ಕಾರ, ಇವತ್ತಿಗೆ ಇಷ್ಟು ಸಾಕು. ಮತ್ತೆ ನಾಳೆ ಸಿಗೋಣ, ಧನ್ಯವಾದಗಳು 🙏</p>

                <p/>
                <ul>
                    <h3>Principle details:</h3>
                    <li>
                        <p>Name: {this.state.principle}</p>
                        <p>Quality Of Work: {this.state.qualityOfWork} </p>
                        <button onClick={this.Increment}>Increment</button>
                        <button onClick={this.Decrement}>Decrement</button>

                    </li>
                </ul>
            </div>
        )
    }
}

export default MainPage; 