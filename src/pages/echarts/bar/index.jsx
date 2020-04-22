import React, { Component } from 'react'
import {Card} from 'antd'
import echartTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
export default class Bar extends Component {
    componentWillMount(){
        echarts.registerTheme("Imocck",echartTheme)
    }
    getOption=()=>{
        let option={
             title:{
                 text:'用户需求订单'
             },
             tooltip:{
                 trigger:'axis'
             },
             xAxis:{
                 data:["星期一","星期一","星期一","星期一","星期一","星期一","星期一"]
             },
             yAxis:{
                 type:'value'
             },
             series:[
                 {
                     name:'订单量',
                     type:'bar',
                     data:[1000,2992,3943,2944,1300,2324,1323]
                 }
             ]
        }
        return option
    }
    getOption2=()=>{
        let option={
             title:{
                 text:'用户需求订单'
             },
             legend:{
               data:['摩拜','ofo','小蓝']
             },
             xAxis:{
                 data:["星期一","星期一","星期一","星期一","星期一","星期一","星期一"]
             },
             yAxis:{
                 type:'value'
             },
             series:[
                 {
                     name:'ofo',
                     type:'bar',
                     data:[1000,2992,3943,2944,1300,2324,1323]
                 },
                 {
                    name:'摩拜',
                    type:'bar',
                    data:[1000,5673,3943,2944,1350,2324,1323]
                },
                {
                    name:'小蓝',
                    type:'bar',
                    data:[1000,2992,3943,7555,1300,2324,1323]
                }

             ]
        }
        return option
    }
    render() {
        return (
            <div>
             <Card title="柱形图表">
               <ReactEcharts option={this.getOption()} theme="Imocck" style={{width:500}}></ReactEcharts>
             </Card>
             <Card title="柱形图表2">
               <ReactEcharts option={this.getOption2()} theme="Imocck" ></ReactEcharts>
             </Card>
            </div>
        )
    }
}
