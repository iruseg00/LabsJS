import React from "react";
import { Tabs } from "antd";
import 'antd/dist/antd.css';
import style from "./style.module.scss";
import Card from "../card/Card";
const { TabPane } = Tabs;

function TabWeeks(props)
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
              week='2'
            />
            <Card 
              dayRu={"Вторник"} 
              day={"Tuesday"}
              week='2'
            />
            <Card 
              dayRu={"Среда"} 
              day={"Wednesday"}
              week='2'
            />
          </div>
          <div className={style.secondString}>
            <Card 
              dayRu={"Четверг"} 
              day={"Thursday"}
              week='2'
            />
            <Card 
              dayRu={"Пятница"} 
              day={"Friday"}
              week='2'
            />
            <Card 
              dayRu={"Суббота"} 
              day={"Saturday"}
              week='2'
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
              week='1'
            />
            <Card 
              dayRu={"Вторник"} 
              day={"Tuesday"}
              week='1'
            />
            <Card 
              dayRu={"Среда"} 
              day={"Wednesday"}
              week='1'
            />
          </div>
          <div className={style.secondString}>
            <Card 
              dayRu={"Четверг"} 
              day={"Thursday"}
              week='1'
            />
            <Card 
              dayRu={"Пятница"} 
              day={"Friday"}
              week='1'
            />
            <Card 
              dayRu={"Суббота"} 
              day={"Saturday"}
              week='1'
            />
          </div>
        </TabPane>
      </Tabs>
    </div>  
  ); 
}

export default TabWeeks;