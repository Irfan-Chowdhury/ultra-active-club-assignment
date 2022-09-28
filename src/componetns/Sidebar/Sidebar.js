import React from 'react';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div>
            {/* My Profile */}
            <section className='mt-4 d-flex flex-row bd-highlight mb-3'>
                <div className="p-2">
                    <img src="irfan.jpg" className="rounded-circle float-start profile-img" alt="..." />
                </div>
                <div className="p-2">
                    <p className='text-start'><b>Irfan Chowdhury</b> <br /> <span>Chittagong, Bangladesh</span></p>
                </div>
            </section>

            {/* Body Structure*/}
            <section className="d-flex justify-content-evenly"  style={{backgroundColor:"#F2F3FB"}}>
                <div><p><b>75</b> kg <br /> <small>Weight</small></p></div>
                <div><p><b>5.8</b> <br /> <small>Height</small></p></div>
                <div><p><b>25</b> year <br /> <small>Age</small></p></div>
            </section>

            {/* Add A Break */}
            <br />
            <p className='text-start'><b>Add A Break</b></p> <hr />

            <section className="d-flex justify-content-evenly" style={{backgroundColor:"#F2F3FB"}}>
                <div className='second'><p><b>10s</b></p></div>
                <div className='seconds-effect'><p><b>20s</b></p></div>
                <div className='second'><p><b>30s</b></p></div>
                <div className='second'><p><b>40s</b></p></div>
                <div className='second'><p><b>50s</b></p></div>
            </section>

            {/* Excercise Details */}
            <br />
            <p className='text-start'><b>Exercise Details</b></p> <hr />
            <section className="card" style={{backgroundColor:"#F2F3FB"}}>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <span><b>Excercise Time</b></span>
                    </div>
                    <div>
                        <span className='fw-light'>2000 Seconds</span>
                    </div>
                </div>
            </section>

            <section className="mt-3 card" style={{backgroundColor:"#F2F3FB"}}>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <span><b>Break Time</b></span>
                    </div>
                    <div>
                        <span className='fw-light'>15 Seconds</span>
                    </div>
                </div>
            </section>

            <br />
            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={showToastMessage}>Activity Completed</button>
                <ToastContainer />
            </div>

           
        </div>
    );
};

export default Sidebar;