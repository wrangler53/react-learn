import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please, enter a store name</h2>
                <input type="text" placeholder="Store name" defaultValue={getFunName()} ref={this.myInput} required/>
                <input type="submit" value="Submit"/>
            </form>
        ) 
    }
}