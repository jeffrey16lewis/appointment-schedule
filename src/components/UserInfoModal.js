import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UserInfoModal = (props) => {

    return (
        <div className='container'>
            <Modal show={props.show} onHide={props.action} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment Information</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>To schedule, enter your name and phone number.</p>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label htmlFor='person'>Name: </label>
                            {props.itemSlot.editable ?
                                <input type='text' id='person' name='person' className='form-control'
                                       onChange={props.person} value={props.itemSlot.name}/> :
                                <input type='text' id='person' name='person' className='form-control'
                                       onChange={props.person}/>
                            }
                        </div>
                        <div className='col-sm-6'>
                            <label htmlFor='phone'>Phone number: </label>
                            {props.itemSlot.editable ?
                                <input type='text' id='phone' name='phone' className='form-control'
                                       onChange={props.phone} value={props.itemSlot.phoneNumber}/> :
                                <input type='text' id='phone' name='phone' className='form-control'
                                       onChange={props.phone}/>}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.action}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.save}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default UserInfoModal;