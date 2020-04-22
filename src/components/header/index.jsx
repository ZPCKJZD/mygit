import React, { Component } from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Axios from './../../axios/index'
import {FormData} from './../../utils/fromData'
export default class Header extends Component {
    state={
        time:'',
        weather:''
    }
    componentDidMount(){
        this.setState({
            time:FormData()
        })
        this.getWeatherAPI()
    }
    //获得天气
    getWeatherAPI=()=>{
        let city="石家庄"
          Axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then(res=>{
            if(res.status==="success"){
                this.setState({
                    weather:res.results[0].weather_data[0]
                })
            }
    
        })
    }
    render() {
        return (
            <div className="header">
               <Row className="header-top">
                  <Col><span>欢迎，天上人间</span>
                          <a href="#">退出</a>
                          </Col>
               </Row>
               <Row className="breadcrumb">
                   <Col className="where" span={4}>首页</Col>
        <Col span={20}><span className='data'>{this.state.time}</span> <span className="weather">{this.state.weather.weather}</span><span><img src={this.state.weather.dayPictureUrl} alt=""/></span></Col>
                </Row>
            </div>
        )
    }
}
