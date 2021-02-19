import React, {useCallback, useEffect, useState} from 'react';
import '../../App.css';
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../../modules/Main'
import {MdRefresh} from "react-icons/md";
import styled from "styled-components";

const StyledMdRefresh = styled(MdRefresh)`
  color: green;
  margin-left: 1rem;
  font-size: larger;
`;
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

const Button = styled.button`
  padding: 0.25rem 1rem;
  border-radius: 3px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1rem",
}))`  
  padding: 0.25rem;
  border: 2px solid palevioletred;
`;

const Index = () => {
    const dispatch = useDispatch()
    const list = useSelector(selectors.selectList)
    const [name, setName] = useState('')
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(list.data)
    }, [list])

    const takeList = () => {
        dispatch(actions.get.request())
    }
    useEffect(() => {
        takeList()
    }, []);

    const addFilm = useCallback(() => {
        dispatch(actions.add.request({name}))
    }, [name])

    return (
        <div className="App">
            <hr/>
            <HeadDiv>
                <Input onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setName(e.target.value)}/>
                <Button onClick={addFilm}> Click to Add</Button>
                <StyledMdRefresh onClick={takeList}/>
            </HeadDiv>
            <hr/>
            {
                rows?.map((r: { id: string, name: string }) => <ListDiv key={r.id}>
                    <span>{r.id} {r.name && ': '}</span> <span>{r.name}</span>
                </ListDiv>)
            }
        </div>
    );
}

export default Index;
