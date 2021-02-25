import React, {useCallback} from "react";
import {Avatar, Button, List, Popconfirm} from 'antd';
import {format, isValid} from "date-fns";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {actions} from '../../modules/Main'
import {database} from '../../adapters/helpers'
const db = database.ref("/messages");

const remove = (key: string) => {
    return db.child(key).remove();
};

interface DataType {
    text: string,
    photo: string,
    uid: string,
    createdAt: string,
    displayName: string,
    id: string
}

const formatDate = (d: number) => {
    const date = new Date(d)
    if (isValid(date)) {
        return format(date, "yyyy.MM.dd 'at' HH:mm:ss")
    }
    return 'undefined'
}

const CustomList = styled(List)`
  width: 60%;
  margin: 0 auto;
`;

const TableComponent = ({data}: { data: DataType[] }) => {
    const dispatch = useDispatch()

    const handleDelete = useCallback((id: string) => () => {
        dispatch(actions.remove.request(id))
    }, [dispatch])
    const rows = data.map(r => ({
        ...r,
        key: r.uid
    }))

    return (
        <CustomList
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            // loadMore={loadMore}
            dataSource={rows}
            renderItem={(item: any) => (
                <List.Item
                    actions={[
                        <Popconfirm title="Sure to delete?" onConfirm={() => remove(item.id)}>
                            <Button>
                                delete
                            </Button>
                        </Popconfirm>
                    ]}
                >
                    <List.Item.Meta
                        avatar={
                            <Avatar src={item.photo}/>
                        }
                        title={item.user}
                        description={item.text}
                    />
                </List.Item>
            )}
        />
    );
}

export default TableComponent
