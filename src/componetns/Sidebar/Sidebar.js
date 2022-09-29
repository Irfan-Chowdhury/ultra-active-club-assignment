import React, { useState } from 'react';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({cart}) => {

    let excerciseTime = 0;
    if (cart.length>0) {
        cart.forEach(element => {
            excerciseTime += element.timeRequired;
        });
    }

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    let value = parseInt(localStorage.getItem('break-time'));
    let [breaktime, setBreaktime] = useState(value ? value : 0); 
    const handleOnClick = (event) => {
        let numberString = event.currentTarget.textContent;
        numberString = numberString.replace("s", "");
        breaktime = parseInt(numberString);
        setBreaktime(breaktime)
        localStorage.setItem('break-time',breaktime);
    };


    return (
        <div className='sidebar'>
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
                <div className={breaktime===10?'seconds-effect':'seconds'}><p><b> <button onClick={handleOnClick}><span>10</span>s</button></b></p></div>
                <div className={breaktime===20?'seconds-effect':'seconds'}><p><b><button onClick={handleOnClick}><span>20</span>s</button></b></p></div>
                <div className={breaktime===30?'seconds-effect':'seconds'}><p><b><button onClick={handleOnClick}><span>30</span>s</button></b></p></div>
                <div className={breaktime===40?'seconds-effect':'seconds'}><p><b><button onClick={handleOnClick}><span>40</span>s</button></b></p></div>
                <div className={breaktime===50?'seconds-effect':'seconds'}><p><b><button onClick={handleOnClick}><span>50</span>s</button></b></p></div>
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
                        <span className='fw-light'>{excerciseTime} Seconds</span>
                    </div>
                </div>
            </section>

            <section className="mt-3 card" style={{backgroundColor:"#F2F3FB"}}>
                <div className="card-body d-flex justify-content-between">
                    <div>
                        <span><b>Break Time</b></span>
                    </div>
                    <div>
                        <span className='fw-light'>{breaktime} Seconds</span>
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