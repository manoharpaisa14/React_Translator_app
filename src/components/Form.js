import React from 'react'

class Form extends React.Component{
  
    constructor(){
        super();
        this.state = {
            username: '',
            email:'',
            password:'',
            error :{},
            isSubmitted: false
        }
    }

    validateForm = (e)=>{
        e.preventDefault();
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;

        let error ={};

        if(username.length == 0 || password.includes(username)){
          
            error.usernameerror = "username can't empty & not present in password"
        }
        if(email.length == 0) {
            error.emailerror = "Email can't be empty"
        }
        if(password.length < 8 || !(/\d/).test(password)){
            error.passworderror = "password must contain 8 char & digit"
        }

        this.setState({ error });

        if(Object.entries(error).length === 0){
            console.log("Form submitted successfully");
            this.setState({ isSubmitted: true})
        }
    }

    render(){
        return(
            <>
                <form onSubmit={this.validateForm} className='w-50 p-4 border border-secondary shadow rounded mx-auto my-5'>
                <div className="mb-3">
                        <label className="form-label">
                        Username
                        </label>
                        <input
                        type="text"
                        className="form-control" value={this.state.username} onChange =
                        {(e) =>{ this.setState({username: e.target.value})}}
                        />
                        {this.state.error.usernameerror &&
                        <span className="text-danger">{this.state.error.usernameerror}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                        Email address
                        </label>
                        <input
                        type="email"
                        className="form-control" value={this.state.email} onChange =
                        {(e)=>{this.setState({email:e.target.value})}}
                        />
                        {this.state.error.emailerror &&
                        <span className="text-danger">{this.state.error.emailerror}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                        Password
                        </label>
                        <input
                        type="password"
                        className="form-control" value={this.state.password} onChange=
                        {(e)=>{this.setState({password:e.target.value})}}
                        />
                        {this.state.error.passworderror &&
                        <span className="text-danger">{this.state.error.passworderror}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                {this.state.isSubmitted && <h3 className='text-success'>Form submitted successfully</h3>}

            </>
        )
    }
}
export default Form