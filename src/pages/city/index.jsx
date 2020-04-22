import React, { Component } from 'react'
import {Button,Card,Table,Form,Select, Modal} from 'antd'
import axios from '../../axios/index'
import FormItem from 'antd/lib/form/FormItem'
const Option=Select.Option
export default class City extends Component {
    state={
        dataSource:[],
        modalVisible:false
    }
    componentDidMount(){
        this.cityStatus()
    }
    cityStatus=()=>{
        axios.ajax({
            url:'zpc/city',
            data:{
                param:{

                },
                loading:true
            },
            method:'GET'
        }).then(res=>{
            res.results.data.map((item,index)=>{
                item.key=index
            })
            this.setState({dataSource:res.results.data})
        })
    } 
    OpenCity=()=>{
        this.setState({
            modalVisible:true
        })
    } 
    ModalOpenCity=()=>{
        this.setState({modalVisible:false})
        let cityInfo=this.cityForm.props.form.getFieldsValue();
       this.cityForm.props.form.validateFields((err,index)=>{
           if(!err){
               console.log(cityInfo)
           }
       })
    }
    render() {
        const columns=[
            {
                title:"城市ID",
                dataIndex:'city_id'
            },
            {
                title:"城市名称",
                dataIndex:'city_name'
            },
            {
                title:"用车模式",
                dataIndex:'bike_mode'
            },
            {
                title:"营运模式",
                dataIndex:'op_mode'
            },
            {
                title:"授权加盟商",
                dataIndex:'join_mode'
            },
            {
                title:"城市管理员",
                dataIndex:'city_watch'
            },
            {
                title:"城市开通时间",
                dataIndex:'open_time'
            },
            {
                title:"操作时间",
                dataIndex:'use_time'
            },
            {
                title:"操作人",
                dataIndex:'use_name'
            },
        ]
        return (
            <div>
                <Card>
                <FilterForm/>
                </Card>
                <Card>
                    <Button type="primary" style={{marginBottom:'50px'}} onClick={this.OpenCity}>
                        开通城市
                    </Button>
                    <Table columns={columns} dataSource={this.state.dataSource} bordered>

                    </Table>
                </Card>
                <Modal visible={this.state.modalVisible} title="开通城市" onOk={this.ModalOpenCity}>
                        <OpenCity wrappedComponentRef={(icon)=>this.cityForm=icon}/>
                </Modal>

            </div>
        )
    }
}

class FilterForm extends Component{
   render(){
       const {getFieldDecorator}=this.props.form
       return(
           <Form layout="inline">
             <FormItem label="城市" style={{marginLeft:'60px'}}>
             {
                 getFieldDecorator('city_id')(
                     <Select placeholder="请选择" style={{width:100}}>
                       <Option value="1">北京市</Option>
                       <Option value="2">天津市</Option>
                       <Option value="3">上海市</Option>
                     </Select>
                 )
             }
             </FormItem>
             <FormItem label="用车模式">
             {
                 getFieldDecorator('use_mode')(
                     <Select placeholder="请选择" style={{width:100}}>
                       <Option value="1">全部</Option>
                       <Option value="2">指定模式</Option>
                       <Option value="3">禁止模式</Option>
                     </Select>
                 )
             }
             </FormItem>
             <FormItem label="经营模式">
             {
                 getFieldDecorator('buy_mode')(
                     <Select placeholder="请选择" style={{width:100}}>
                       <Option value="1">全部</Option>
                       <Option value="2">自营模式</Option>
                       <Option value="3">加盟模式</Option>
                     </Select>
                 )
             }
             </FormItem>
             <FormItem label="加盟商授权状态">
             {
                 getFieldDecorator('op_mode')(
                     <Select placeholder="请选择" style={{width:100}}>
                       <Option value="1">全部</Option>
                       <Option value="2">已授权</Option>
                       <Option value="3">未授权</Option>
                     </Select>
                 )
             }
             </FormItem>
             <Button type="primary" style={{margin:"0 20px 0 20px"}}>查询</Button>
             <Button>重置</Button>
           </Form>
       )
   }
}
FilterForm=Form.create({})(FilterForm)

class OpenCity extends Component{
    render(){
        const {getFieldDecorator}=this.props.form
        return(
            <Form layout="horizontal">
               <FormItem  label="选择城市" 
                  labelCol={{span:5}}  wrapperCol={{span:5}} 
               >
                   {
                       getFieldDecorator('city_change')(
                        <Select placeholder="请选择">
                        <Option value="1">北京</Option>
                        <Option value="2">上海</Option>
                        <Option value="3">天津</Option>
                    </Select>
                       )
                   }
                  
               </FormItem>
               <FormItem  label="营运模式" 
                  labelCol={{span:5}}  wrapperCol={{span:5}} 
               >
                   {
                       getFieldDecorator('mode_change')(
                        <Select placeholder="请选择">
                        <Option value="1">自营</Option>
                        <Option value="2">加盟</Option>
                    </Select>
                       )
                   }
                  
               </FormItem>
               <FormItem  label="用车模式" 
                  labelCol={{span:5}}  wrapperCol={{span:5}} 
               >
                   {
                       getFieldDecorator('use_change')(
                        <Select placeholder="请选择">
                        <Option value="1">指定点</Option>
                        <Option value="2">禁停区</Option>

                    </Select>
                       )
                   }
            
               </FormItem>
            </Form>
        )
    }
}
OpenCity=Form.create({})(OpenCity)
