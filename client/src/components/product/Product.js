import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './List';
import CreateForm from './Create';
import EditForm from './Edit';
import ViewForm from './View';

class Product extends Component {
    render() {
        const { match } = this.props;

        return (
            <div>
                <center><h1>Product</h1></center>
                <Switch>
                    <Route path={`${match.url}/list`} component={ProductList} />
                    <Route path={`${match.url}/create`} component={CreateForm} />
                    <Route path={`${match.url}/edit/:id`} component={EditForm} />
                    <Route path={`${match.url}/view/:id`} component={ViewForm} />
                </Switch>
            </div>
        );
    }
}

export default Product;
