import React from 'react';
import style from "./style.module.scss";
import 'antd/dist/antd.css';
import { Select, Input } from 'antd';
import Icons from "../icons/Icons";

const { Option } = Select;

export default function SubCard(props)
{
  const id = props.id;
  return (
    <div className={style.subCard}>  
      <div className={style.inputs}>
        <div className={style.firstString}>
          <Select
            className={style.selectBlock} 
            size="middle"
            id={id}
            value={props.number}
            onChange={props.above}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
          </Select>
          <Input
            id={id} 
            className={style.inputFIO}
            placeholder="ФИО преподавателя" 
            maxLength="40"
            onChange={props.setFIO}
          />
        </div>
          <div className={style.secondString}>
            <Input 
              id={id}
              className={style.inputRoom}
              placeholder="Ауд." 
              maxLength="6"
              onChange={props.setRoom}
            />
            <Input 
              id={id}
              className={style.inputLesson}
              placeholder="Предмет" 
              maxLength="30"
              onChange={props.setLesson}
            />
          </div>    
      </div>
      <Icons 
        id={id} 
        setDate={props.setDate}
        altDate={props.altDate}
        altLesson={props.altLesson}
        altRoom={props.altRoom}
        altFIO={props.altFIO}
      />
    </div>  
  ); 
}
