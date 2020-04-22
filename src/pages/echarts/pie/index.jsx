import React, { Component } from 'react'
import {Card} from 'antd'
import echartTheme from './../echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
export default class Pie extends Component {
    componentWillMount(){
        echarts.registerTheme("Imook",echartTheme)
    }
getPie=()=>{
    let option={
        title:{
            x:'center',
            text:'用户需求订单'
        },
        tooltip:{
            trigger:'item',
            formatter:'{a}<br/>{b}:{c}({d}%)'
        },
        legend:{
            orient:'vertical',
            top:10,
            right:200,
            bottom:10,
            data:['周一','周二','周三','周四','周五','周六','周日']
        },
        series:[
            {
                name:'订单量',
                type:'pie',
                data:[
                    {
                        name:'周一',
                        value:800
                    },
                    {
                        name:'周二',
                        value:3000
                    },
                    {
                        name:'周三',
                        value:1000
                    },
                    {
                        name:'周四',
                        value:1000
                    },
                    {
                        name:'周五',
                        value:1340
                    },
                    {
                        name:'周六',
                        value:1000
                    },
                    {
                        name:'周日',
                        value:1200
                    }
                ]
            }
        ]
    }
    return option
}
getPie2=()=>{
    let option={
        title:{
            x:'center',
            text:'用户需求订单'
        },
        tooltip:{
            trigger:'item',
            formatter:'{a}<br/>{b}:{c}({d}%)'
        },
        legend:{
            orient:'vertical',
            top:10,
            right:200,
            bottom:10,
            data:['周一','周二','周三','周四','周五','周六','周日']
        },
        series:[
            {   radius:['60%','80%'],
                name:'订单量',
                type:'pie',
                data:[
                    {
                        name:'周一',
                        value:800
                    },
                    {
                        name:'周二',
                        value:3000
                    },
                    {
                        name:'周三',
                        value:1000
                    },
                    {
                        name:'周四',
                        value:1000
                    },
                    {
                        name:'周五',
                        value:1340
                    },
                    {
                        name:'周六',
                        value:1000
                    },
                    {
                        name:'周日',
                        value:1200
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
                <Card title="饼图">
                <ReactEcharts option={this.getPie()}></ReactEcharts>
                </Card>
                <Card title="饼图">
                <ReactEcharts option={this.getPie2()}></ReactEcharts>
                </Card>
            </div>
        )
    }
}
