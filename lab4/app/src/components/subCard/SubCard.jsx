import React from 'react';
import style from "./style.module.scss";
import 'antd/dist/antd.css';
import { Select, Input } from 'antd';
import Icons from "../icons/Icons";

const { Option } = Select;

export default class SubCard extends React.Component
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
            <Select 
              size="middle"
              id={id}
              value={this.props.number}
              onChange={this.props.above}
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
              onChange={this.props.setFIO}
            />
          </div>
            <div className={style.secondString}>
              <Input 
                id={id}
                className={style.inputRoom}
                placeholder="Ауд." 
                maxLength="6"
                onChange={this.props.setRoom}
              />
              <Input 
                id={id}
                className={style.inputLesson}
                placeholder="Предмет" 
                maxLength="30"
                onChange={this.props.setLesson}
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
