import React, {useCallback, useEffect, useState} from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux'
import {actions, selectors} from '../../modules/Main'
const Index = () => {
    const dispatch = useDispatch()
    const list = useSelector(selectors.selectList)
    const [name, setName] = useState('')
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(list.data)
    }, [list])

    useEffect(() => {
        dispatch(actions.get.request())
    }, []);

    const addFilm = useCallback(() => {
        dispatch(actions.add.request({name}))
    }, [name])

    return (
        <div className="App">
            <hr/>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={addFilm}> Click to Fetch</button>
            <hr/>
            {
                rows?.map((r: { id: string, name: string }) => <div key={r.id}>
                    <span>{r.id}</span> - <span>{r.name}</span>
                    <hr/>
                </div>)
            }
        </div>
    );
}

export default Index;
