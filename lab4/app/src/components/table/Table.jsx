import React from "react";
import style from "./style.module.scss"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TabWeeks from "../tabWeeks/TabWeeks";
import { Input , Button } from "antd";
import { readyToSend } from "../../redux/actions/action"
import api from "../../helper/api";

class Table extends React.Component
{
  constructor(props)
  {
    super(props);
    this.changeID = this.changeID.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeID(e)
  {
    this.ID = e.target.value;
  }

  submit(e)
  {
    this.props.readyToSend(true);
    setTimeout(()=>
    {
      api("78.47.43.112:49999/bot/regisration" , "POST" , this.props.week);
      this.props.readyToSend(false);
    } , 0)
  }

  render()
  {
    return (
        <div className={style.content}>
          <TabWeeks />
          <div className={style.send}>
            <Input 
            size="large"
            maxLength="30"
            className={style.id}
            placeholder="ID"
            onChange={this.changeID}
            />
            <Button
            size="large"
            onClick={this.submit}
            >
              Отправить
            </Button>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state)
{
  return { 
    week : state.week,
    send: state.send
  }
};

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({readyToSend} , dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(Table);