import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {};
        let price;
        for (let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }
            else{
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ingredients, totalPrice: price})
    }

    checkoutCancelHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinueHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    
    render() { 
        return ( 
            <div>
                <CheckoutSummary 
                    checkoutCancel = {this.checkoutCancelHandler}
                    checkoutContinue = {this.checkoutContinueHandler}
                    ingredients={this.state.ingredients}/>
                <Route 
                    render={(props) => (<ContactData {...props} price={this.state.totalPrice} ingredients={this.state.ingredients}/>)} 
                    path={this.props.match.path + '/contact-data'} />
            </div>
         );
    }
}
 
export default Checkout;