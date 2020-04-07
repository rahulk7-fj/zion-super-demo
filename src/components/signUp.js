import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { registerService } from '../apiservices/serviceCalls'
import SignIn from './signIn'

class SignUp extends React.Component{
    constructor(props){
        super();
        this.state={
             userName:"",
             emailId:"",
             password:"",
             msg:""

        }
    }
    
    onchangeHandler=(e)=>{
        this.setState({[e.target.id] : e.target.value,msg:""})  
      }

    onsubmitHandler=async(e)=>{
        e.preventDefault()
        const {history} = this.props;
        console.log(history)
        const res = await registerService(this.state);
        if(res.msg !== "success") return this.setState({msg:res});
        history.push('/login');
    }

    render(){
        return(  
            <Form className="signup" onSubmit={this.onsubmitHandler}>
            <Form.Text className="header">Sign Up</Form.Text>
            <Form.Group controlId="userName">
              <Form.Control type="text" placeholder="enter username" value={this.state.userName} onChange={this.onchangeHandler}/>
            { this.state.msg && this.state.msg.id ==="userName" &&
               <Form.Text className="text-muted">{this.state.msg.msg}</Form.Text>
            }
            </Form.Group>
            <Form.Group controlId="emailId">
              <Form.Control type="email" placeholder="enter email" value ={this.state.emailId} onChange={this.onchangeHandler}/>
              { this.state.msg && this.state.msg.id ==="emailId" &&
               <Form.Text className="text-muted">{this.state.msg.msg}</Form.Text>
              }
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="enter password" value={this.state.password} onChange={this.onchangeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        )
    }
}
export default SignUp