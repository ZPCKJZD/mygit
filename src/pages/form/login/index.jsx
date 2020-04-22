import React, { Component } from 'react'
import {Card,Button,Form,Input,message, Icon,Checkbox} from 'antd'
const FormItem=Form.Item
class FormLogin extends Component {
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.info(`${userInfo.userName}`)
            }
        })
    }
    render() {
        const {getFieldDecorator} =this.props.form;
        return (
            <div style={{width:'100%'}}>
                <Card title="内敛表单">
                     <Form layout="inline">
                       <FormItem>
                           <Input placeholder="账号"></Input>
                       </FormItem>
                       <FormItem>
                           <Input placeholder="密码"></Input>
                       </FormItem>
                       <FormItem>
                           <Button type="primary">登录</Button>
                       </FormItem>
                     </Form>
                </Card>
                <Card title="水平表单">
                     <Form layout="horizontal" style={{width:'300px'}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'赵四',
                                    rules:[{
                                        required:true,
                                        message:'用户名不能为空'
                                    },
                                    {
                                        pattern:/^\w/g,
                                        message:"用户名必须以字母或者数字"
                                    }
                                    
                                ]
                                
                                })(<Input prefix={<Icon  type="user"/>} placeholder="账号"></Input>)
                            }
                         
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('pwd',{
                                    initialValue:'123',
                                    rules:[]
                                
                                })(<Input prefix={<Icon  type="lock"/>} placeholder="密码"></Input>)
                            }    
                        </FormItem>
                        <FormItem>
                        {
                                getFieldDecorator('check',{
                                    initialValue:true,
                                    valuePropName:"checked"
                                
                                })(<Checkbox>记住密码</Checkbox>)
                            }    
                        </FormItem>
                        <FormItem>
                        <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                     </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);
