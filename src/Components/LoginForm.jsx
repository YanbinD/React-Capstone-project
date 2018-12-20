import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }

    //form>div.form-group>label+input.form-control
    render() { 
        return (
            <div>
                <h1> Login </h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <input type="text" className="form-control"/>
                        <input type="text" className="form-control"/>
                    </div>
                </form>
            </div>
          );
    }
}
 
export default LoginForm;