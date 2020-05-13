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
  }

  render()
  {
    return (
      <div className={style.pane}>  
        <Tabs defaultActiveKey="1" tabBarGutter="30px">
          <TabPane 
            tab="Чётная неделя" 
            key="1" 
            className={style.container}
          >
            <div className={style.firstString}>
              <Card 
                dayRu={"Понедельник"} 
                day={"Monday"}
              />
              <Card 
                dayRu={"Вторник"} 
                day={"Tuesday"}
              />
              <Card 
                dayRu={"Среда"} 
                day={"Wednesday"}
              />
            </div>
            <div className={style.secondString}>
            <Card 
              dayRu={"Четверг"} 
              day={"Thursday"}
            />
            <Card 
              dayRu={"Пятница"} 
              day={"Friday"}
            />
            <Card 
              dayRu={"Суббота"} 
              day={"Saturday"}
            />
          </div>
          </TabPane>
          <TabPane 
          tab="Нечётная неделя" 
          key="2"
          className={style.container}
          >
            <div className={style.firstString}>
              <Card 
                dayRu={"Понедельник"} 
                day={"Monday"}
              />
              <Card 
                dayRu={"Вторник"} 
                day={"Tuesday"}
              />
              <Card 
                dayRu={"Среда"} 
                day={"Wednesday"}
              />
            </div>
            <div className={style.secondString}>
              <Card 
                dayRu={"Четверг"} 
                day={"Thursday"}
              />
              <Card 
                dayRu={"Пятница"} 
                day={"Friday"}
              />
              <Card 
                dayRu={"Суббота"} 
                day={"Saturday"}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>  
    );
  }  
}
