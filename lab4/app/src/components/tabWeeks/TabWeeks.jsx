import React from "react";
import { Tabs } from "antd";
import 'antd/dist/antd.css';
import style from "./style.module.scss";
import Card from "../card/Card";
const { TabPane } = Tabs;

export default class TabWeeks extends React.Component
{
  constructor(props)
  {
    super(props);
    this.oddWeek = {};
    this.week = {};
    this.weekSetDay = this.weekSetDay.bind(this);
    this.oddWeekSetDay = this.oddWeekSetDay.bind(this);
  }

  weekSetDay(day , value)
  {
    this.week[day] = value;
  }

  oddWeekSetDay(day , value)
  {
    this.oddWeek[day] = value;
  }

  render()
  {
    return (
      <div className={style.pane}>  
        <Tabs defaultActiveKey="1" tabBarGutter="30px">
          <TabPane tab="Чётная неделя" key="1" 
          className={style.container}>
            <Card 
              dayRu={"Понедельник"} 
              day={"Monday"}
              weekSetDay={this.weekSetDay}
            />
          </TabPane>
          <TabPane tab="Нечётная неделя" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>  
    );
  }  
}
