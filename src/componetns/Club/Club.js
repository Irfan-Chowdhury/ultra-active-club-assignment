import React from 'react';
import CardList from '../CardList/CardList';
import Sidebar from '../Sidebar/Sidebar';

const Club = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-9" style={{backgroundColor:"#F2F3FB"}}>
                    <CardList></CardList>
                </div>
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Club;