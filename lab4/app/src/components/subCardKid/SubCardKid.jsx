import React from 'react';
import style from "./style.module.scss";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus , faUsers } from '@fortawesome/free-solid-svg-icons';

export default class SubCardKid extends React.Component
{
  constructor(props)
  {
    super(props);
    this.para = {};
  }
  
  changeFIO = e => this.para.name = e.target.value;
  changeRoom = e => this.para.room = e.target.value;

  render()
  {
    return (
      <div className={style.subCard}>  
        <div className={style.inputs}>
            <div className={style.firstString}>
                <Input 
                    className={style.disabled}
                    value={this.props.number}
                    disabled={true}
                />
                <Input 
                    className={style.inputFIO}
                    placeholder="ФИО преподавателя" 
                    maxLength="40"
                    onChange={this.changeFIO}
                />
            </div>
            <div className={style.secondString}>
                <Input 
                    className={style.inputRoom}
                    placeholder="Ауд." 
                    maxLength="6"
                    onChange={this.changeRoom}
                />
                <Input 
                    className={style.inputLesson}
                    placeholder="Предмет" 
                    maxLength="30"
                    onChange={this.changeRoom}
                />
              </div>    
        </div>
        <div className={style.icons}>
            <FontAwesomeIcon
            className={style.icon}
            icon={faUsers}
            />
            <FontAwesomeIcon
            className={style.icon}
            icon={faCalendarPlus}
            />
        </div>
      </div>  
    );
  }  
}
