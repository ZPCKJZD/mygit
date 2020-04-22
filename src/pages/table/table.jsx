import React, { Component } from 'react'
import {Card,Table,Modal,Button,message,Badge} from 'antd'
import axios from './../../axios/index'
export default class Tables extends Component {
    state={
        dataSource:[]
    }
    componentDidMount(){
    this.getDataSource()
    }
    getDataSource=()=>{
       axios.ajax({
           url:'zpc/table',
           data:{
               param:{
                   page:1
               },
               loading:true
           }
       }).then(res=>{
           if(res.code=='0'){
           res.results.map((item,index)=>{
                   item.key=index
               })
            this.setState({dataSource:res.results,
            selectedRows:[],
            selectedRowKeys:''
            })
           }
       })
    }
handleChange=(recode,index)=>{
    let selectKey=[index];
    Modal.info({
        title:'用户信心',
        content:recode.name
    })
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem:recode
    })

}
handleDelete=()=>{
    let {selectedRows}=this.state;
    let ids=[]
    selectedRows.map(item=>{
        ids.push(item.id)
    })
    Modal.confirm({
        title:'删除',
        content:`你确定要删除这些${ids.join(',')}数据吗`,
        onOk:()=>{
            message.info('删除成功')
            this.getDataSource()
        }
    })
}
handleSort=(a,b,sort)=>{
   this.setState({sortOrder:sort.order})
}
handleDeleteXin=(item)=>{
    Modal.confirm({
        title:"确认删除",
        content:`${item.id}`
    })
}
    render() {
         let columns=[
             {
                 title:"id",
                 dataIndex:"id"
             },
             {
                 title:'姓名',
                 dataIndex:"name"
             },
             {
                title:'年龄',
                dataIndex:"age"
            },
            {
                title:'性别',
                dataIndex:"sex",
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title:'爱好',
                dataIndex:"interest",
                render(interest){
                    switch (interest) {
                        case 1:       
                        return "乒乓"
                        case 2:       
                        return "篮球"
                        case 3:       
                        return "游泳"
                        default:
                          return "跑步"

                    }
                }
            },
            {
                title:'电话',
                dataIndex:"phone"
            },

         ]
         let columns2=[
            {
                title:"id",
                dataIndex:"id",
    
                fixed:'left',
                width:100,
            },
            {
                title:'姓名',
                dataIndex:"name",
                fixed:'left',
                width:100
            },
            {
               title:'年龄',
               dataIndex:"age",
               sorter:(a,b)=>{
                return a.id-b.id
             },
               sortOrder:this.state.sortOrder,
               width:100
           },

           {
               title:'性别',
               dataIndex:"sex",
               render(sex){
                   return sex==1?'男':'女'
               },
               width:50,
           },
           {
               title:'爱好',
               dataIndex:"interest",
               render(interest){
                   switch (interest) {
                       case 1:       
                       return <Badge  status="success" text="乒乓"/>
                       case 2:       
                       return "篮球"
                       case 3:       
                       return "游泳"
                       default:
                         return "跑步"
                   }
               },
               width:100
           },
           {
               title:'电话',
               dataIndex:"phone",
               width:100
           },
           {
               title:"删除",
               render:(text,item)=>{
                  return  <Button onClick={()=>this.handleDeleteXin(item)}>删除</Button>    
               }
           }

        ]
         const {selectedRowKeys}=this.state;
         const rowSelection={
             type:"radio",
             selectedRowKeys
         }
         const rowCheckSelection={
            type:"check",
            selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="表格" >
                   <Table columns={columns} rowSelection={rowSelection}
                    onRow={(record,index) => {
                        return {
                          onClick: event => {this.handleChange(record,index)}, // 点击行
                        };
                      }}
                      scroll={{y:200}}
                      pagination={
                        {  defaultCurrent:1 ,pageSize:5,showQuickJumper:true}
                      }
                   bordered dataSource={this.state.dataSource}>

                   </Table>
                </Card>
                <Card title="复选框-表格" >
                    <Button onClick={this.handleDelete}>删除</Button>
                   <Table columns={columns2} rowSelection={rowCheckSelection}
                   bordered dataSource={this.state.dataSource}  
                   onChange={this.handleSort}
                   >
                    
                   </Table>
                </Card>
            </div>
        )
    }
}
