import React, { Component } from 'react'
import {Card} from 'antd'
import echartTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
export default class Line extends Component {
    componentWillMount(){
        echarts.registerTheme("Imcook",echartTheme)
    }
    getOption=()=>{
        let option={
            title:{
                text:"用户需求"
            },
            tooltip:{
                trigger:'axis'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis:{
               type:'value'
            },
            series:[
               { 
                   name:"订单量",
                   type:'line',
                   data:[
                       {
           
                           value:1000
                       },
                       {
                 
                        value:1040
                    },
                    {
                
                        value:4000
                    },
                    {
                   
                        value:1000
                    },
                    {
                 
                        value:5000
                    },
                    {
               
                        value:1700
                    },
                    {
               
                        value:3000
                    }
                   ]
            
            
            
            
            }

            ]

        }
        return option
    }
    render() {
        return (
            <div>
                <Card title="折线图">
                   <ReactEcharts option={this.getOption()} theme="Imcook">

                   </ReactEcharts>
                </Card>
            </div>
        )
    }
}
