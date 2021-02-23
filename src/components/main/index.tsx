import React, {useCallback, useEffect, useState} from 'react';
import '../../App.css';
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../../modules/Main'
import {
    SyncOutlined,
} from '@ant-design/icons';
import styled from "styled-components";
import {format, isValid} from 'date-fns'
import {Button, Tooltip, Input} from "antd";

const {Search} = Input;

const HeadDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem .5rem .25rem;
  border-bottom: 1px dashed gray;
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

    const formatDate = (d: number) => {
        const date = new Date(d)
        if (isValid(date)) {
            return format(date, "yyyy.MM.dd 'at' HH:mm:ss")
        }
        return 'undefined'
    }

    return (
        <div className="App">
            <HeadDiv>
                <StyledSearch
                    placeholder="add name"
                    allowClear
                    enterButton="Add"
                    onSearch={addFilm}
                />
                <Tooltip title="search">
                    <Button type="primary" onClick={() => {
                        dispatch(actions.get.request())
                    }}
                            icon={<SyncOutlined/>}/>
                </Tooltip>
            </HeadDiv>
            <hr/>
            {
                rows?.map((r: { addDate: number, name: string, id: string }) => <ListDiv key={r.id}>
                    <span>{formatDate(r.addDate)}</span> <span>{r.name}</span>
                </ListDiv>)
            }
        </div>
    );
}

export default Index;
