import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    checkoutCancelHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() { 
        let summary = <Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
            summary = 
            <div>
                {purchasedRedirect}
                <CheckoutSummary 
                checkoutCancel = {this.checkoutCancelHandler}
                checkoutContinue = {this.checkoutContinueHandler}
                ingredients={this.props.ings}/>
                <Route 
                    component={ContactData} 
                    path={this.props.match.path + '/contact-data'} />
            </div>
        }
        return summary
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burguerBuilder.ingredients,
        purchased: state.order.purchased
    }
}
 
export default connect(mapStateToProps)(Checkout);