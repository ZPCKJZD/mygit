import React, { Component } from 'react'
import {Form,Card,Input,Button,Radio,InputNumber, Select,Switch, DatePicker, Upload,message} from 'antd'
import moment from '_moment@2.24.0@moment'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const FormItem=Form.Item
const RadioGroup=Radio.Group
const Option=Select.Option
const TextArea =Input.TextArea
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
class Reg extends Component {
    state = {
        loading: false,
      };
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };
    handleSubmit=()=>{
           let userInfo=this.props.form.getFieldsValue();
           this.props.form.validateFields((err,value)=>{
               if(!err){
                 console.log(userInfo.sex)
               }
           })
      }
    render() {
        const {getFieldDecorator}=this.props.form
        const { imageUrl } = this.state;
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const formItemLayout={
           labelCol:{
                xm:24,
                sm:4
            },
            wrapperCol:{
                xm:24,
                sm:12
            }
        }
        return (
            <div>
                <Card title="注册">
                     <Form layout="horizontal" >
                         <FormItem  label="用户名:" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'userName',{
                                 rules:[
                                     {
                                         required:true
                                     }
                                 ]
                             }   
                         )(<Input></Input>)}
                         </FormItem>
                         <FormItem label="密码:" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'pwd',{

                             }   
                         )(<Input></Input>)}
                         </FormItem>
                         <FormItem label="性别" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'sex',{
                                  initialValue:"1"
                             }   
                         )(<RadioGroup>
                             <Radio value="1">男</Radio>
                             <Radio value="2">女</Radio>
                         </RadioGroup>)}
                         </FormItem>
                         <FormItem label="年龄" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'age',{
                                  initialValue:"18"
                             }   
                         )(<InputNumber></InputNumber>)}
                         </FormItem>
                         <FormItem label="当前状态" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'status',{
                                  initialValue:"1"
                             }   
                         )(
                            <Select>
                                <Option value="1">郑鹏程</Option>
                                <Option value="2">大帅哥</Option>
                            </Select>
                         )}
                         </FormItem>
                         <FormItem label="是否已婚" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'isMary',{
                                 valuePropName:'checked',
                                 initialValue:true
                             }   
                         )(
                           <Switch></Switch>
                         )}
                         </FormItem>
                         <FormItem label="出生日期" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'birthday',{
                                initialValue:moment('1998-03-04')
                             }   
                         )(
                          <DatePicker/>
                         )}
                         </FormItem>
                         <FormItem label="联系地址" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'where',{
                               
                             }   
                         )(
                            <TextArea autoSize={{minRows:5}}/>
                         )}
                         </FormItem>
                         <FormItem label="头像" {...formItemLayout}>
                         {
                         getFieldDecorator(
                             'urlImg',{
                               
                             }   
                         )(
                            <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                          >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                          </Upload>
                         )}
                         </FormItem>
                         <Button onClick={this.handleSubmit}>提交</Button>
                     </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Reg)
