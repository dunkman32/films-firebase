import React, {useCallback, useEffect, useState} from 'react';
import '../../App.css';
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../../modules/Main'
import {SyncOutlined,} from '@ant-design/icons';
import styled from "styled-components";
import {Button, Input, Tooltip} from "antd";
import TableComponent from './table'

const {Search} = Input;

const HeadDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearch = styled(Search)`
  width: 250px;
`;


const Index = () => {
    const dispatch = useDispatch()
    const list = useSelector(selectors.selectList)
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(list.data)
    }, [list])

    useEffect(() => {
        dispatch(actions.get.request())
    }, [dispatch]);

    const addFilm = useCallback((name) => {
        dispatch(actions.add.request({name}))
    }, [dispatch])

    return (
        <div className="App">
            <HeadDiv>
                <StyledSearch
                    placeholder="add name"
                    allowClear
                    enterButton="Add"
                    onSearch={addFilm}
                />
                <Tooltip title="refresh">
                    <Button type="primary" onClick={() => {
                        dispatch(actions.get.request())
                    }} icon={<SyncOutlined/>}/>
                </Tooltip>
            </HeadDiv>
            <hr/>
            {
                rows && <TableComponent data={rows}/>
            }
        </div>
    );
}

export default Index;
