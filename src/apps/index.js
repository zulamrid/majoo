import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, getAllDatas, updateData } from './../store/app/action';
import Table from './components/Table';
import Modal from './components/Modal';
import Button from './components/Button';
import Moment from 'moment';
import './style/style.css';

const AllDatas = (props) => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.app)

    const _deleteData = (v) => {
        dispatch(deleteData(v))
    }

    const _sentToParent = (i) => {
        props.parentData(i)
    }

    return (
        <Table>
            {props.all.datas && props.all.datas !== 0 ?
                props.all.datas
                    .filter(data => data.status === props.status)
                    .sort((x, y) => props.status === 0 ? new Date(x.createdAt) - new Date(y.createdAt) : new Date(y.createdAt) - new Date(x.createdAt))
                    .map((v, i) =>
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.description}</td>
                            <td>{v.status}</td>
                            <td>{v.createdAt}</td>
                            <td><Button
                                label="e"
                                action={() => _sentToParent(i)}
                                disable={false}
                                style={{
                                    borderRadius:50,
                                    border: 0,
                                    height:20,
                                    width:20,
                                    backgroundColor: '#27ae60',
                                    color: 'white'
                                }}
                            />
                            </td>
                            <td><Button
                                label="x"
                                action={() => _deleteData(v.id)}
                                disable={props.status === 1 ? true : false}
                                style={{
                                    borderRadius:50,
                                    border: 0,
                                    height:20,
                                    width:20,
                                    backgroundColor: '#c0392b',
                                    color: 'white'
                                }}
                            />
                            </td>
                        </tr>
                    )
                :
                "Load Data..."
            }
        </Table>
    )
}

const showdata = [
    {
        id: 0,
        val: 0
    },
    {
        id: 0,
        val: 1
    },
]

const Index = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.app)

    useEffect(() => {
        dispatch(getAllDatas())
    }, [])

    const [form, setForm] = useState({
        id: 0,
        title: '',
        description: '',
        status: 0,
        createdAt: Moment().format('YYYY-MM-DD HH:mm')
    })
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(false)


    const setState = e => {
        console.log(e.target.name)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const showModal = (v) => {
        if(v === 'tambah'){
            setUpdate(false)
            setForm({
                ...form,
                id: 0,
                title: '',
                description: '',
                status: 0
            });
            setShow(!show)
        }else{
            setShow(!show)
        }
    }

    const _addData = () => {
        const last = selector.datas.length
        setForm({
            ...form,
            id: parseInt(last + 1),
        });
        dispatch(addData(form))
    }

    const _setData = (i) => {
        setUpdate(true)
        setForm({
            ...form,
            id: selector.datas[i].id,
            title: selector.datas[i].title,
            description: selector.datas[i].description,
            status: selector.datas[i].status
        });
        showModal("update")
    }

    const _updateData = () => {
        dispatch(updateData(form))
    }

    return (
        <div className="container">

            <Button
                label="+"
                action={() => showModal("tambah")}
                disable={false}
                style={{
                    position: 'absolute',
                    borderRadius: 50,
                    bottom: 30,
                    right: 50,
                    height: 60,
                    width: 60,
                    border: 0,
                    fontSize: 30,
                }}
            />

            {showdata.map((v, i) =>
                <div className="col" key={i}>
                    <AllDatas
                        all={selector}
                        status={v.val}
                        parentData={_setData}
                    />
                </div>
            )}

            <Modal
                show={show}>
                <div className="form">
                    <input type="text" name="title" value={form.title} onChange={setState} placeholder="Title" />
                    <input type="text" name="description" value={form.description} onChange={setState} placeholder="Description" />
                    <select name="status" onChange={e => setForm({ ...form, status: parseInt(e.target.value) })}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                    </select>
                </div>
                <Button
                    label={update ? "Update" : "Tambah"}
                    action={update ? _updateData : _addData}
                    disable={false}
                    style={{
                        marginTop:20,
                        width: '100%'
                     }}
                />
            </Modal>
        </div>
    )
}

export default Index