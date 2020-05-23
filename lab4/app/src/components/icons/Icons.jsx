import React from 'react';
import style from "./style.module.scss";
import { Input, Popover } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus , faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Icons(props)
{
    var id = props.id;
    return (
      <div className={style.icons}>
        <Popover 
          placement="right" 
          title="Для второй подгруппы" 
          content={<div className={style.inputs}>
            <Input
                id={id} 
                className={style.inputFIO}
                placeholder="ФИО преподавателя" 
                maxLength="40"
                onChange={props.altFIO}
            />
            <Input 
                id={id}
                className={style.inputLesson}
                placeholder="Предмет" 
                maxLength="30"
                onChange={props.altLesson}
            />
            <div className={style.roomAndDate}>
                <Input 
                    id={id}
                    className={style.inputRoomAndDate}
                    placeholder="Ауд." 
                    maxLength="6"
                    onChange={props.altRoom}
                />
                <Input 
                    id={id}
                    className={style.inputRoomAndDate}
                    placeholder="Даты" 
                    maxLength="30"
                    onChange={props.altDate}
                />
            </div>
        </div>}
        >
          <FontAwesomeIcon
            className={style.icon}
            icon={faUsers}
          />
        </Popover>
        <Popover 
        placement="right" 
        title="Указать дату"
        content={
            <Input 
                id={id}
                className={style.date}
                placeholder="Даты" 
                maxLength="30"
                onChange={props.setDate}
            />}
        >
          <FontAwesomeIcon
            className={style.icon}
            icon={faCalendarPlus}
          />
        </Popover>
      </div>
    );
}
