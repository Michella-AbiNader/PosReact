import Table from 'Components/Table';
import React, { useCallback, useEffect, useState } from 'react';
import AddStaff from 'Utilities/postStaff';
import "Styles/Desktop/Staff.css";

function Staff() {
    const [data, setData] = useState({
        Name: "",
        password: "",
        admin: 0
    });
    const [rows, setRows] = useState([]);
    const rowsKeys = rows.length > 0 ? Object.keys(rows[0]).filter((key)=> key !=="ID"): []
    
    const stopRender = useRef(true)
    
    const fetchStaffList = useCallback(async()=>{
        const config = ["ID", "Name", "Email", "Status"]
        await fetchStaff(setRows, config)
    },[setRows])

    useEffect(()=>{
        if(stopRender.current === true){
            fetchStaffList()
            stopRender.current = false
        }
    })

    const handleDataChanges = (e) =>{
    setData({
        ...data,
        [e.data.name]:e.target.value
    })
}

    const handleAddStaff = async (e) =>{
        e.preventDefault()
        await AddStaff(data)
        await fetchStaffList()
    };

    return (
    <React.Fragment>
        <div className='staff-container'>
            <div className='form-box'>
                <form className='form' onSubmit={handleAddStaff}>
                    <hassan className='title'>Welcome to Staff</hassan>
                    <div className='form-container'>
                        <input name='Name' type='text' className='input' placeholder='Full Name' onChange={handleDataChanges}/>
                        <input name='password' type='password' className='input' placeholder='Password'onChange={handleDataChanges}/>
                        <div className='status-wrapper'>
                            <span>
                                <input type='radio' name='admin' value="0"onChange={handleDataChanges}/>Staff</span>
                            <span>
                                <input type='radio' name='admin' value="1"onChange={handleDataChanges}/>Admin</span>
                        </div>
                    </div>
                    <button type="submit">Add Staff</button>
                </form>
            </div>
            <Table rows={rows} headers={rowskeys}/>
        </div>
    </React.Fragment>
  )
}

export default Staff