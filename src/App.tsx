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

const App: FC = () => {
  const [form] = Form.useForm()
  const [isSend, setIsSend] = React.useState(false)
  const layout = {
    labelCol: { span: 8 },
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
    fetch('https://30a9-178-234-177-62.ngrok.io/api/kp', {
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
  const fill = 'black'
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
      <a href="http://easyqr.ru/" target="_blank" rel="noreferrer">
        <svg
          width="60"
          height="60"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512.001 512.001"
          className="easyQR1"
          xmlSpace="preserve"
        >
          <g>
            <path
              fill={fill}
              d="M46.546,186.187h93.089c25.706,0,46.544-20.839,46.545-46.545V46.554
          		c0-25.706-20.838-46.544-46.544-46.545h-0.001H46.546c-25.706,0-46.545,20.838-46.545,46.544v0.001v93.089
          		C0.001,165.348,20.84,186.187,46.546,186.187z M46.546,46.554h93.089v93.089H46.546V46.554z"
            />
            <path
              fill={fill}
              d="M139.634,325.821H46.546c-25.706,0-46.545,20.838-46.545,46.544v0.001v93.089
          		c0,25.706,20.839,46.544,46.545,46.545h93.089c25.706,0,46.544-20.839,46.545-46.545v-93.089
          		C186.179,346.661,165.341,325.821,139.634,325.821C139.635,325.821,139.634,325.821,139.634,325.821z M139.634,465.455H46.546
          		v-93.089h93.089V465.455z"
            />
            <path
              fill={fill}
              d="M465.447,325.821h-93.089c-25.706,0-46.544,20.838-46.545,46.544v0.001v93.089
          		c0,25.706,20.839,46.544,46.545,46.545h93.089c25.706,0,46.544-20.839,46.545-46.545v-93.089
          		C511.992,346.661,491.153,325.821,465.447,325.821L465.447,325.821z M465.447,465.455h-93.089v-93.089h93.089V465.455z"
            />
            <circle fill={fill} cx="477.079" cy="34.919" r="34.908" />
            <circle fill={fill} cx="477.079" cy="151.284" r="34.908" />
            <circle fill={fill} cx="360.725" cy="34.919" r="34.908" />
            <path
              fill={fill}
              d="M255.996,186.187c12.853,0,23.272-10.419,23.272-23.272v-23.272
          		c0-12.853,10.418-23.272,23.271-23.272h0.001c12.853,0,23.272-10.419,23.272-23.272s-10.419-23.272-23.272-23.272
          		s-23.272-10.419-23.272-23.272V23.282C279.274,10.428,268.858,0.005,256.005,0c-12.853-0.005-23.276,10.41-23.282,23.263
          		c0,0.005,0,0.012,0,0.017v139.634C232.723,175.768,243.143,186.187,255.996,186.187L255.996,186.187z"
            />
            <path
              fill={fill}
              d="M255.996,232.732c-12.853,0-23.272-10.419-23.272-23.272c-0.008-12.853-10.433-23.265-23.286-23.258
          		c-12.842,0.008-23.25,10.416-23.258,23.258c0,12.853-10.419,23.272-23.272,23.272H23.275c-12.855,0-23.274,10.419-23.274,23.272
          		c0,12.853,10.419,23.272,23.272,23.272h139.634c12.853,0,23.272,10.418,23.272,23.271v0.001c0,12.853,10.419,23.272,23.272,23.272
          		s23.272,10.418,23.272,23.271v0.001v46.545c0,12.853,10.419,23.272,23.272,23.272c12.853,0,23.274-10.418,23.274-23.271V256.004
          		c0-12.853-10.418-23.272-23.271-23.272C255.996,232.732,255.996,232.732,255.996,232.732L255.996,232.732z"
            />
            <path
              fill={fill}
              d="M488.719,232.732h-69.817c-12.853,0-23.272-10.419-23.272-23.272v-58.18
          		c0-19.279-15.629-34.908-34.908-34.908s-34.908,15.629-34.908,34.908v11.637c0,12.853-10.419,23.272-23.272,23.272
          		c-12.853-0.008-23.278,10.405-23.286,23.258c-0.008,12.853,10.405,23.278,23.258,23.286c0.01,0,0.019,0,0.028,0
          		c12.853,0,23.272,10.418,23.272,23.271v0.001c0,12.853,10.419,23.272,23.272,23.272h139.634
          		c12.853,0.005,23.276-10.41,23.282-23.263c0.005-12.853-10.41-23.276-23.263-23.282
          		C488.731,232.732,488.725,232.732,488.719,232.732L488.719,232.732z"
            />
            <circle fill={fill} cx="255.999" cy="488.729" r="23.272" />
          </g>
        </svg>
      </a>
      <h3 style={{ marginBottom: '30px' }}>Easy QR</h3>
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
                <Select.Option value={'Turkey'}>{'Turkey'}</Select.Option>
                <Select.Option value={'Commonwealth of Independent States'}>
                  {'Commonwealth of Independent States'}
                </Select.Option>
                <Select.Option value={'China'}>{'China'}</Select.Option>
                <Select.Option value={'European Union'}>
                  {'European Union'}
                </Select.Option>
                <Select.Option value={'USA'}>{'USA'}</Select.Option>
                <Select.Option value={'United Arab Emirates'}>
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
                  ? { ...layout.wrapperCol, offset: 8 }
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
