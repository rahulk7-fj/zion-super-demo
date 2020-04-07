import React from 'react'
import { Form, Button } from 'react-bootstrap'


class SignIn extends React.Component{
    constructor(props){
         super();
         this.state={
             username:"",
             password:"",
             msg:""
         }
    }
     
    onchangeHandler=(e)=>{
          this.setState({[e.target.id] : e.target.value})    
    }
  
      onsubmitHandler=(e)=>{
          e.preventDefault()
          console.log(this.state)
      }
  
    render(){
        return(
            <Form className="signin" onSubmit={this.onsubmitHandler}>
              <Form.Text className="header">Sign In</Form.Text>
            <Form.Group controlId="userName">
                <Form.Control type="text" placeholder="enter username" value ={this.state.username} onChange={this.onchangeHandler}/>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control type="password" placeholder="enter password" value={this.state.password} onChange={this.onchangeHandler}/>
            </Form.Group>
            <Form.Text><a href="/">Forgot Password ?</a></Form.Text>
            <Button variant="primary" type="submit">
              Login
            </Button>
            </Form>
        )
    }
}

export default SignIn