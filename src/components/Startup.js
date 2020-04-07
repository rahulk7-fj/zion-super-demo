import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import welcome from '../static/welcome.svg'

class Startup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pageName:""
        }
       
       
    }
    onclickHandler=(e)=>{
        e.preventDefault()
        this.setState({pageName:e.target.value})
    }

    render(){
          let {history} = this.props
        return(
            <Container className="container-page">
                <img src={welcome} alt="welcome cats"/>
                { !this.state.pageName &&
                <Row>
                    <Col><Button type="submit" onClick={this.onclickHandler} value="register">Register/SignUp</Button></Col>
                    <Col><Button type="submit" onClick={this.onclickHandler} value="login">Login/SignIn</Button></Col>
                </Row>}
                { this.state.pageName &&
                <Row>
                <Col> {this.state.pageName==='register' ? history.push('/register') : history.push('/login') }</Col>
                </Row>}
               
            </Container>
        )
    }
}
export default Startup