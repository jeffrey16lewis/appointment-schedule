import React, {Component} from 'react';
import UserInfoModal from "./UserInfoModal";

class Scheduler extends Component {
    constructor(props) {
        super(props);

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.saveInfo = this.saveInfo.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    state = {
        timeSlots: [
            '9 - 10',
            '10 - 11',
            '11 - 12',
            '12 - 1',
            '1 - 2',
            '2 - 3',
            '3 - 4',
            '4 - 5'
        ],
        entry: {
            name: '',
            phoneNumber: '',
            editable: false
        },
        show: false,
        name: '',
        phoneNumber: ''

    }

    handleCloseModal() {
        console.log(this.state.show)
        this.setState({show: false})
    }

    saveInfo() {
        // this will use the array to store items
        console.log('saving....');
        this.setState({
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
            show: false
        });
    }

    handleNameChange(e) {
        console.log('name');
        this.setState({name: e.target.value});
    }

    handlePhoneNumberChange(e) {
        console.log('number');
        this.setState({phoneNumber: e.target.value});
    }

    showModal() {
        this.setState({show: true});
    }

    render() {
        return (
            <div className='container well'>
                <div className='jumbotron'>
                    <h2>Appointment Scheduler</h2>
                </div>
                <UserInfoModal action={this.handleCloseModal}
                               show={this.state.show}
                               person={this.handleNameChange}
                               phone={this.handlePhoneNumberChange}
                               save={this.saveInfo}/>
                <div className='row'>
                    <div className='col-sm-4'></div>
                    <div className='col-sm-4'>
                        <ul className='list-group'>
                            {this.state.timeSlots.map((slot, index) => (
                                <li key={index} className='list-group-item' onClick={this.showModal}>{slot}</li>
                            ))}
                        </ul>
                    </div>ø
                    <div className='col-sm-4'></div>
                </div>
            </div>
        )
    }
}

export default Scheduler;