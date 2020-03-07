import React, { Component } from 'react';

class Logic extends Component{ 
    constructor(props) {
        super(props);
    
        this.state = {
            edit: false,
            id: null,
            mockData: [{
                name: 'Tono',
                address: 'Jalan Kuburan No 12',
                phone: '0000000'
            }, {
                name: 'Tony',
                address: 'Jalan Kuburan No 11',
                phone: '0000001'
            }]
        }
    }
    
    onSubmitHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: [...this.state.mockData, {
            name: event.target.newname.value,
            address: event.target.newaddress.value,
            phone: event.target.newphone.value
            }]
        });

        event.target.newname.value = '';
        event.target.newaddress.value = '';
        event.target.newphone.value = '';
    }
    
    onDeleteHandle() {
        let index = arguments[0];

        this.setState({
            mockData: this.state.mockData.filter((item,i) => {
                if (i !== index) {
                    return item;
                }
            })
        });
    }
    
    onEditHandle(event) {
        this.setState({
            edit: true,
            index: arguments[0],
            name: arguments[1],
            address: arguments[2],
            phone: arguments[3]
        });
    }
    
    onUpdateHandle(event) {
        event.preventDefault();

        this.setState({
            mockData: this.state.mockData.map((item,i) => {
            if (i === this.state.index) {
                item['name'] = event.target.updatedName.value;
                item['address'] = event.target.updatedAddress.value;
                item['phone'] = event.target.updatedPhone.value;
                return item;
            }

            return item;
            })
        });

        this.setState({
            edit: false
        });
    }

    onCancelUpdate(){
        this.setState({
            edit: false
        });
    }
        
    renderEditForm() {
        if (this.state.edit) {
            return (
                <div className="popup">
                    <div className="popupinner">
                        <span className="close" onClick={this.onCancelUpdate.bind(this)}>&times;</span>
                        <form className="form" onSubmit={this.onUpdateHandle.bind(this)}>
                        <input type="text" name="updatedName" className="inputBox" defaultValue={this.state.name} />
                        <input type="text" name="updatedAddress" className="inputBox" defaultValue={this.state.address} />
                        <input type="number" name="updatedPhone" className="inputBox" defaultValue={this.state.phone} />
                        <button className="update">Update</button>
                        </form>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    {this.renderEditForm()}
                    <div className="formbox">
                        <center>
                            <h1 className="textT1">INPUT DATA HERE</h1>
                        </center>
                        <form className="form" onSubmit={this.onSubmitHandle.bind(this)}>
                        <input type="text" name="newname" className="inputBox" placeholder="Name"/>
                        <input type="text" name="newaddress" className="inputBox" placeholder="Address"/>
                        <input type="number" name="newphone" className="inputBox" placeholder="Phone"/>
                        <button className="add">Add</button>
                    </form>
                   <p className="copyright">© Misael Azarya</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th>#No</th>
                            <th>NAME</th>
                            <th>ADDRESS</th>
                            <th>PHONE</th>
                            <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mockData.map((item,i) => (
                                <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className="edit" onClick={this.onEditHandle.bind(this, i, item.name, item.address, item.phone)}>edit</button>
                                    <button className="delete" onClick={this.onDeleteHandle.bind(this, i)}>delete</button>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Logic;