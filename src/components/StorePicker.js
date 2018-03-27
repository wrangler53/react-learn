import React from 'react';

export default class StorePicker extends React.Component {
    render() {
        return(
            <form action="" className="store-selector">
                <h2>Please, enter a store name</h2>
                <input type="text" placeholder="Store name" required/>
                <input type="submit" value="Submit"/>
            </form>
        ) 
    }
}