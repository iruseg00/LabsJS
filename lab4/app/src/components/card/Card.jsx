import React from 'react';
import style from "./style.module.scss";
import SubCard from "../subCard/SubCard";
import SubCardKid from "../subCardKid/SubCardKid";

export default class Card extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { number: 1};
    this.above = this.above.bind(this);
    this.setFIO = this.setFIO.bind(this);
  }

  setFIO(number , FIO)
  {
    let day = this.props.day;
    let object = {};
    object[day].number = number;
    object[day].para.name = FIO;
    this.weekSetDay(day , object[day]);
  }

  above(number)
  {
    this.setState({ number })
  }

  render()
  {
    let number = +this.state.number; 
    return (
      <div className={style.card}>  
        <div className={style.title}>
          <h1>{this.props.dayRu}</h1>
        </div>
        <div className={style.context}>
          <SubCard 
            above={this.above} 
            number={number}
          />
          <hr className={style.line} />
          <SubCardKid 
            number={number + 1}
          />
          <hr className={style.line} />
          <SubCardKid 
            number={number + 2}
          />
          <hr className={style.line} />
          <SubCardKid 
            number={number + 3}
          />
          <hr className={style.line} />
          <SubCardKid 
            number={number + 4}
          />
        </div>
      </div>  
    );
  }  
}
