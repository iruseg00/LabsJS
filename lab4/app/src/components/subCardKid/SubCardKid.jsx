import React from 'react';
import style from "./style.module.scss";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import Icons from "../icons/Icons";

export default function SubCardKid(props)
{
  const id = props.id;
  return (
    <div className={style.subCard}>  
      <div className={style.inputs}>
          <div className={style.firstString}>
              <Input 
                  className={style.disabled}
                  value={props.number}
                  disabled={true}
                  id={id}
              />
              <Input 
                  className={style.inputFIO}
                  placeholder="ФИО преподавателя" 
                  maxLength="40"
                  onChange={props.setFIO}
                  id={id}
              />
          </div>
          <div className={style.secondString}>
              <Input 
                  className={style.inputRoom}
                  placeholder="Ауд." 
                  maxLength="6"
                  onChange={props.setRoom}
                  id={id}
              />
              <Input 
                  className={style.inputLesson}
                  placeholder="Предмет" 
                  maxLength="30"
                  onChange={props.setLesson}
                  id={id}
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
