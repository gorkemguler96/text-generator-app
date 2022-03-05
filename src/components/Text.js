import React, {useEffect, useState} from 'react';
import { InputNumber, Select, Input } from 'antd';
import {useSelector, useDispatch} from "react-redux";
import {fetchParagraphs, inputType, onChangeNumber, onChangeType} from '../redux/textSlice'
import axios from "axios";



function Text(props) {

    const items = useSelector((state) => state.text)
    const dispatch = useDispatch()
    const { Option } = Select;
    const { TextArea } = Input;
    const [inputType, setInputType] = useState("text")


    function onChange(value) {
        dispatch(onChangeNumber(value))
    }

    // useEffect(async ()=>{
    //    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${items.inputNumber}&format=${inputType}`).then(
    //         (res)=>res.data
    //     )
    //     console.log(res)
    // },[inputType])

    function onChangeType (value) {
        if(value == 1){
            setInputType("html")
            console.log(inputType)
        }else{
            setInputType("text")
            console.log(inputType)
        }
    }

    useEffect(()=>{
            dispatch(fetchParagraphs({ inputNumber: items.inputNumber, inputType}))
    },[items.inputNumber, inputType])

    return (
        <div className={"textcss"}>
            <p>Paragraphs <span>Include HTML</span></p>
            <InputNumber min={1} max={100} defaultValue={items.inputNumber} onChange={onChange} />
            <Select className={"inputs"} onChange={onChangeType} defaultValue={`No`}>
                <Option value="1">Yes</Option>
                <Option value="2">No</Option>
            </Select>
            <TextArea className={"textArea"} value={ items.items} rows={4} />
        </div>
    );
}

export default Text;
