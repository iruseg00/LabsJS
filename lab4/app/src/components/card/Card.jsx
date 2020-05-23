import React from 'react';
import style from "./style.module.scss";
import SubCard from "../subCard/SubCard";
import SubCardKid from "../subCardKid/SubCardKid";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setWeek , setOddWeek } from "../../redux/actions/action";
class Card extends React.Component
{
  componentDidUpdate(prevProps) 
  {
    if (prevProps.send !== this.props.send) 
      this.setState({readyToSend: this.props.send})
  }

  constructor(props)
  {
    super(props);
    this.putInStorage = this.putInStorage.bind(this);
    this.state = { number: 1 , readyToSend: false };
    this.above = this.above.bind(this);
    this.setFIO = this.setFIO.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setLesson = this.setLesson.bind(this);
    this.setDate = this.setDate.bind(this);
    this.altFIO = this.altFIO.bind(this);
    this.altRoom = this.altRoom.bind(this);
    this.altLesson = this.altLesson.bind(this);
    this.altDate = this.altDate.bind(this);
    this.card = 
    {
      "one":   { number: 1 , para:{} , alt:{} },
      "two":   { number: 2 , para:{} , alt:{} },
      "three": { number: 3 , para:{} , alt:{} },
      "four":  { number: 4 , para:{} , alt:{} },
      "five":  { number: 5 , para:{} , alt:{} }
    }
  }

  setFIO    = (event)=> this.card[event.target.id].para.name   = event.target.value;
  setRoom   = (event)=> this.card[event.target.id].para.room   = event.target.value;
  setLesson = (event)=> this.card[event.target.id].para.lesson = event.target.value;
  setDate   = (event)=> this.card[event.target.id].para.date   = event.target.value;
  altFIO    = (event)=> this.card[event.target.id].alt.name    = event.target.value;
  altRoom   = (event)=> this.card[event.target.id].alt.room    = event.target.value;
  altLesson = (event)=> this.card[event.target.id].alt.lesson  = event.target.value;
  altDate   = (event)=> this.card[event.target.id].alt.date    = event.target.value;

  above(number)
  {
    this.setState({ number })
  }

  putInStorage()
  {
    let week = {};
    let array = [];
    for (let key in this.card)
      array.push(this.card[key]);
    week[this.props.day] = array;
    if(this.props.week == 2)
      this.props.setWeek(week);
    else this.props.setOddWeek(week);
  }

  render()
  {
    if(this.state.readyToSend) this.putInStorage();
    let number = +this.state.number; 
    this.card.one.number = number;
    this.card.two.number = number + 1;
    this.card.three.number = number + 2;
    this.card.four.number = number + 3;
    this.card.five.number = number + 4;
    return (
      <div className={style.card}>  
        <div className={style.title}>
          <h1>{this.props.dayRu}</h1>
        </div>
        <div className={style.context}>
          <SubCard 
            setFIO={this.setFIO}
            setRoom={this.setRoom}
            setLesson={this.setLesson}
            setDate={this.setDate}
            altDate={this.altDate}
            altFIO={this.altFIO}
            altRoom={this.altRoom}
            altLesson={this.altLesson}
            above={this.above} 
            number={number}
            id="one"
          />
          <hr className={style.line} />
          <SubCardKid 
            setFIO={this.setFIO}
            setRoom={this.setRoom}
            setLesson={this.setLesson}
            setDate={this.setDate}
            altDate={this.altDate}
            altFIO={this.altFIO}
            altRoom={this.altRoom}
            altLesson={this.altLesson}
            number={number + 1}
            id="two"
          />
          <hr className={style.line} />
          <SubCardKid 
            setFIO={this.setFIO}
            setRoom={this.setRoom}
            setLesson={this.setLesson}
            setDate={this.setDate}
            altDate={this.altDate}
            altFIO={this.altFIO}
            altRoom={this.altRoom}
            altLesson={this.altLesson}
            number={number + 2}
            id="three"
          />
          <hr className={style.line} />
          <SubCardKid 
            setFIO={this.setFIO}
            setRoom={this.setRoom}
            setLesson={this.setLesson}
            setDate={this.setDate}
            altDate={this.altDate}
            altFIO={this.altFIO}
            altRoom={this.altRoom}
            altLesson={this.altLesson}
            number={number + 3}
            id="four"
          />
          <hr className={style.line} />
          <SubCardKid 
            setFIO={this.setFIO}
            setRoom={this.setRoom}
            setLesson={this.setLesson}
            setDate={this.setDate}
            altDate={this.altDate}
            altFIO={this.altFIO}
            altRoom={this.altRoom}
            altLesson={this.altLesson}
            number={number + 4}
            id="five"
          />
        </div>
      </div>  
    );
  }  
}

function mapStateToProps(state)
{
  return { 
    send: state.send
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({setWeek , setOddWeek} , dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(Card);