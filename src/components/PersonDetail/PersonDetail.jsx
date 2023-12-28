import { useFetcher, useNavigate, useParams } from 'react-router-dom';
import './PersonDetail.css'
import { useEffect, useState } from 'react';
import { deleteData, peoplesData } from '../Home/Home';

const PersonDetail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [person, setPerson] = useState({
        name: "",
        area: "",
        contact_no: "",
        exp: ""
    })
    const [editable, setEditable] = useState(false)


    const info = peoplesData.filter(people => (people.id === parseInt(params.id)))

    const handleEdit = (e) => {
        setEditable(true)
    }
    const handleSave = () => {
        console.log(info);
    }
    const handleDelete = (e) => {

        deleteData(params.id)
        navigate("/")
    }
    useEffect(() => {
        setPerson(info[0])
    }, [info])
    return (
        <div className='personDetails-container'>
            <h2>Employee Details</h2>
            <div className='info'>
                {!editable &&
                    <div>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>}

                <div className='data'>
                    <label >Name</label>
                    {
                        !editable ? <span>{info[0]?.name || "name"}</span> : <input type="text" value={person.name} onChange={e => { setPerson({ ...person, name: e.target.value }) }} />
                    }
                </div>
                <div className='data'>
                    <label >Area</label>
                    {
                        !editable ? <span>{info[0]?.area || "name"}</span> : <input type="text" value={info[0]?.area} onChange={e => {
                            info[0].area = e.target.value
                        }} />
                    }
                </div>
                <div className='data'>
                    <label >Contact No</label>
                    {
                        !editable ? <span>{info[0]?.contact_no || "name"}</span> : <input type="text" value={info[0]?.contact_no} onChange={e => {
                            info[0].contact_no = e.target.value
                        }} />
                    }
                </div>
                <div className='data'>
                    <label >Experience Year</label>
                    {
                        !editable ? <span>{info[0]?.exp || "name"}</span> : <input type="text" value={info[0]?.exp} onChange={e => {
                            info[0].exp = e.target.value
                        }} />
                    }
                </div>
                {
                    editable && <div style={{ margin: '1rem 0' }}>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={(e) => setEditable(false)}>Cancle</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonDetail