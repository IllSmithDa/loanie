import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import SideBarNav from './SideBarNav';
import '../CSS/LoanList.css';

export default class LoanList extends Component {
  constructor() {
    super();
    this.state = {
      username: 'billy',
    };
    this.selectLoan = this.selectLoan.bind(this);
  }
  selectLoan() {
    console.log(this.state.username);
  }
  render() {
    return (
      <div className="Loanlist">
        <Navbar />
        <div className="Loanlist-title-containter">
          <h1> Add a new Loan</h1>
        </div>
        <div className="Loanlist-image-container">
          <Link to="/create_loan">
            <img className="Loanlist-image-item" src="https://cdn.pixabay.com/photo/2012/04/02/15/48/sign-24805_960_720.png" alt="plus_sign" />
          </Link>
        </div>
        <SideBarNav />
      </div>
    );
  }
}
