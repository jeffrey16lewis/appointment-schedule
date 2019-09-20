import React, {Component} from 'react';
import UserInfoModal from "./UserInfoModal";
import '../App.css'

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
            {
                slot: '9:00 am - 10:00 am', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '10:00 am - 11:00 am', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '11:00 am - 12:00 pm', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '12:00 pm - 1:00 pm', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '1:00 pm - 2:00 pm', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '2:00 pm - 3:00 pm', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '3:00 pm - 4:00 pm', name: '',
                phoneNumber: '',
                editable: false
            },
            {
                slot: '4:00 pm - 5:00 pm', name: '',
                phoneNumber: '',
                editable: false
            }
        ],
        slot: '',
        show: false,
        name: '',
        phoneNumber: '',
        data: [],
        id: 0

    }

    handleCloseModal() {
        this.setState({
            show: false, timeSlots: this.state.timeSlots.map((slot, index) => {
                if (index === this.state.id && slot.name !== '' && slot.phoneNumber !== '') {
                    slot.editable = true;
                }
                return slot;
            }),
            name: '',
            phoneNumber: '',
        })
    }

    saveInfo() {
        if(this.state.name !== '' || this.state.phoneNumber !== '') {
            this.setState({
                show: false, timeSlots: this.state.timeSlots.map((slot, index) => {
                    if (index === this.state.id) {
                        slot.name = this.state.name;
                        slot.phoneNumber = this.state.phoneNumber
                        slot.editable = true;
                    }
                    return slot;
                })
            });
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value, timeSlots: this.state.timeSlots.map((slot, index) => {
                if (index === this.state.id) {
                    slot.editable = false;
                }
                return slot;
            })
        });
    }

    handlePhoneNumberChange(e) {
        this.setState({phoneNumber: e.target.value, timeSlots: this.state.timeSlots.map((slot, index) => {
                if (index === this.state.id) {
                    slot.editable = false;
                }
                return slot;
            })});
    }

    showModal(index) {
        this.setState({show: true, id: index, slot: this.state.timeSlots[this.state.id]});
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h2>Appointment Scheduler</h2>
                </div>
                <UserInfoModal action={this.handleCloseModal}
                               show={this.state.show}
                               person={this.handleNameChange}
                               phone={this.handlePhoneNumberChange}
                               save={this.saveInfo}
                               itemSlot={this.state.timeSlots[this.state.id]}/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4'>
                            <ul className='list-group'>
                                {this.state.timeSlots.map((slot, index) => (
                                    slot.editable ? <li key={index} className='list-group-item list-group-item-danger
                                    list-group-hover list-group-striped'
                                                        onClick={this.showModal.bind(this, index)}>{slot.slot}</li> :
                                        <li key={index} className='list-group-item
                                        list-group-hover list-group-striped list-group-item-success'
                                            onClick={this.showModal.bind(this, index)}>{slot.slot}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='col-sm-4'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler;