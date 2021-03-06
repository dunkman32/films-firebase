import React, {useCallback, useEffect, useState} from 'react';
import '../../App.css';
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../../modules/Main'
import {selectors as authSelectors} from '../../modules/Auth'
import {SyncOutlined,} from '@ant-design/icons';
import styled from "styled-components";
import {Button, Input, Tooltip, Typography } from "antd";
import TableComponent from './table'
import SignOut from '../SignOut';
const { Title } = Typography;
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
const StyledTitle = styled(Title)`
  text-align: center;
  font-style: italic;
`;


const Index = () => {
    const dispatch = useDispatch()
    const list = useSelector(selectors.selectList)
    const user = useSelector(authSelectors.selectUser)
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
            <StyledTitle  type="secondary" level={4}>Welcome back {user.displayName}</StyledTitle>
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
                <SignOut />
            </HeadDiv>
            <hr/>
            {
                rows && <TableComponent data={rows}/>
            }
        </div>
    );
}

export default Index;
