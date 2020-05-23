import React from 'react';
import style from "./style.module.scss";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import Icons from "../icons/Icons";
export default class SubCardKid extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const id = this.props.id;
    return (
      <div className={style.subCard}>  
        <div className={style.inputs}>
            <div className={style.firstString}>
                <Input 
                    className={style.disabled}
                    value={this.props.number}
                    disabled={true}
                    id={id}
                />
                <Input 
                    className={style.inputFIO}
                    placeholder="ФИО преподавателя" 
                    maxLength="40"
                    onChange={this.props.setFIO}
                    id={id}
                />
            </div>
            <div className={style.secondString}>
                <Input 
                    className={style.inputRoom}
                    placeholder="Ауд." 
                    maxLength="6"
                    onChange={this.props.setRoom}
                    id={id}
                />
                <Input 
                    className={style.inputLesson}
                    placeholder="Предмет" 
                    maxLength="30"
                    onChange={this.props.setLesson}
                    id={id}
                />
              </div>    
        </div>
        <Icons 
          id={id} 
          setDate={this.props.setDate}
          altDate={this.props.altDate}
          altLesson={this.props.altLesson}
          altRoom={this.props.altRoom}
          altFIO={this.props.altFIO}
        />
      </div>  
    );
  }  
}
