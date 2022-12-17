/* eslint-disable no-template-curly-in-string */
import React, { FC } from 'react'
import {
  Form,
  Input,
  Button,
  Select
} from 'antd'
import './App.css'
import { handleResponse } from './utils/helpers'
import logo from './assets/images/new-logo.png'

const App: FC = () => {
  const [form] = Form.useForm()
  const [isSend, setIsSend] = React.useState(false)
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  }
  const { TextArea } = Input
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    }
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onFinish = (values: any) => {
    console.log(values)
    fetch('https://kapayji.ru/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...values
      })
    })
      .then(async (res) => await handleResponse(res))
      .then((res) => setIsSend(true))
      .catch((e) => console.log(e))
  }
  const windowWidth = window.innerWidth
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          backgroundImage: `url(${logo})`,
          width: '200px',
          height: '200px',
          backgroundPosition: 'centre',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      {isSend
        ? (
        <h4>You are successeful send message</h4>
          )
        : (
        <div
          style={{
            display: 'block',
            minWidth: '60%'
          }}
        >
          <Form
            {...layout}
            onFinish={onFinish}
            validateMessages={validateMessages}
            name="nest-messages"
            form={form}
          >
            <Form.Item
              label="Name"
              rules={[{ required: true }]}
              name="name"
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[{ type: 'email', required: true }]}
              name="email"
              hasFeedback
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Select placeholder="Please select a country">
                <Select.Option value={'CIS'}>
                  {'Commonwealth of Independent States'}
                </Select.Option>
                <Select.Option value={'EU'}>{'European Union'}</Select.Option>
                <Select.Option value={'TUR'}>{'Turkey'}</Select.Option>
                <Select.Option value={'UAE'}>
                  {'United Arab Emirates'}
                </Select.Option>
                <Select.Option value={'Other'}>
                  {'Another country - write your version in the comments'}
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Comment" name="comment">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item
              wrapperCol={
                windowWidth > 575
                  ? { ...layout.wrapperCol, offset: 6 }
                  : undefined
              }
              style={{ textAlign: 'center' }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
          )}
    </div>
  )
}

export default App
