import React from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends React.Component {
    goToStore = (event) => {
        event.preventDefault();
    }

    render() {
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please, enter a store name</h2>
                <input type="text" placeholder="Store name" defaultValue={getFunName()} required/>
                <input type="submit" value="Submit"/>
            </form>
        ) 
    }
}