import React, { Component } from 'react'
import {Button,Card,Tooltip} from 'antd'
import {SearchOutlined} from '@ant-design/icons'
export default class Buttons extends Component {
    state={
        flag:false
    }
    handleChange=()=>{
        this.setState({flag:true})
        setTimeout(()=>{
            this.setState({flag:false})
        },2000)
    }
    render() {
        return (
            <div>
                <Card title="基础按钮">
                      <Button type="primary">按钮</Button>
                      <Button type="dashed">按钮</Button>
                </Card>
                <Card title="图形按钮">
                     <Tooltip title="搜索">
                            <Button icon={<SearchOutlined/>}>搜索</Button>
                     </Tooltip>
                </Card>
                <Card title="loading">
                     <Button loading={this.state.flag} onClick={this.handleChange}>加载</Button>
                </Card>
            </div>
        )
    }
}
