import React from 'react';

export default class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (e) => {
        e.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }
        
        this.props.addFish(fish);

        e.currentTarget.reset();
    }
    
    render() {
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" palceholder="Name" ref={this.nameRef} className="name"/>
                <input type="text" palceholder="Price" ref={this.priceRef} className="price"/>
                <select type="text" palceholder="Status" ref={this.statusRef} className="status">
                    <option value="avaliable">Fresh!</option>
                    <option value="unavaliable">Sold Out!</option>
                </select>
                <textarea type="text" palceholder="Desc" ref={this.descRef} className="desc"></textarea>
                <input type="text" palceholder="Image" ref={this.imageRef} className="image"/>
                <button type="submit">+ Add Fish</button>
            </form>
        ); 
    }
}