import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["fullname"] = "";
            fields["emailid"] = "";
            fields["phone"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["fullname"]) {
            formIsValid = false;
            errors["fullname"] = "*Please enter your fullname.";
        }

        if (typeof fields["fullname"] !== "undefined") {
            if (!fields["fullname"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["fullname"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "*Please enter your phoneNo.";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["phone"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }



    render() {
        return (
            <div className="container py-5">
                <h1>Form Validation In React.js</h1>
                <div className="card border-0 shadow w-100 p-3 mx-auto">
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                placeholder="Enter Your Full Name"
                                name="fullname"
                                value={this.state.fields.username} onChange={this.handleChange}
                            />
                            <div className="errorMsg">{this.state.errors.fullname}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter Your E-mail Address"
                                name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}
                            />
                            <div className="errorMsg">{this.state.errors.emailid}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Enter Your Phone Number"
                                name="phone" value={this.state.fields.phone} onChange={this.handleChange}
                            />
                            <div className="errorMsg">{this.state.errors.phone}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="Enter Your Password"
                                name="password" value={this.state.fields.password} onChange={this.handleChange}
                            />
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                        <button className="btn btn-primary" type="submit" value="Register">Create New Account</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Form;