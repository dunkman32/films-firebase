import React, {useCallback} from 'react';
import '../../App.css';
import {useDispatch, useSelector} from 'react-redux'
import {messages} from '../../adapters/main'
import {actions} from '../../modules/Main'
import {SyncOutlined,} from '@ant-design/icons';
import styled from "styled-components";
import {Button, Input, Tooltip, Typography} from "antd";
import TableComponent from './table'
import SignOut from '../SignOut';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {selectors as authSelectors} from '../../modules/Auth'

const {Title} = Typography;
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

interface DataType {
    text: string,
    photo: string,
    uid: string,
    createdAt: string,
    displayName: string,
    id: string
}

const Index = () => {
    const dispatch = useDispatch()
    const user = useSelector(authSelectors.selectUser)
    const query = messages().orderBy('createdAt').limit(25);
    const [rows] = useCollectionData<DataType>(query, {idField: 'id'})

    const addFilm = useCallback((name) => {
        messages().add({
            text: name,
            user: user.displayName,
            photo: user.photoURL,
            uid: user.uid,
            createdAt: new Date(),
        })
    }, [dispatch])

    return (
        <div className="App">
            {
                rows && <TableComponent data={rows}/>
            }
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
                <SignOut/>
            </HeadDiv>
            <hr/>

        </div>
    );
}

export default Index;
