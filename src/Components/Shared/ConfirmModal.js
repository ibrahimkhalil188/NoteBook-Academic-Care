import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import { ImCross } from 'react-icons/im'
const ConfirmModal = () => {
    const handleDelete = (TrueOrFalse) => {
        if (TrueOrFalse) {
            signOut(auth)
        }
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-2xl text-red-600 text-center">Do you want to signOut</h3>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-success">Close</label>
                        <label for="my-modal-6" class="btn btn-error" onClick={() => handleDelete(true)}>Yes</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;