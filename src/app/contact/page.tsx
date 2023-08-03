"use client";
import React from "react";
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { Divider, notification, Space } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import "../../style/pages/contact/contact.scss";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} không được để trống !!",
  types: {
    email: "${label} không đúng định dạng !!",
    number: "${label} phải là số !!",
  },
  number: {
    range: "${label} trong khoảng ${min} đến ${max} ",
  },
};

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Gửi yêu cầu thành công`,
      description:
        "Cảm ơn bạn đã liên hệ với tôi,tôi sẽ sớm giải đáp thắc mắc của bạn nhanh nhất có thể !!",
      placement,
    });
  };
  const onFinish = (values: any) => {
    openNotification("top");

    form.resetFields();
    console.log(values);
  };

  return (
    <div className="contact container">
      <div className="row">
        <div className="contact__title col-4 mt-5">
          {contextHolder}
          <h4>Thanks you !!!</h4>
          <p>
            Cảm ơn bạn đã dành thời gian để đọc bài viết .
            <br />
            Hãy gởi cho tôi câu hỏi,nhận xét hay ý kiến của bạn !!
          </p>
        </div>
        <Form
          {...layout}
          className="contact__form col-8"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          form={form}
        >
          <h2 className="text-center">Thông tin liên hệ</h2>
          <Form.Item
            name={["user", "name"]}
            label="Họ tên"
            rules={[
              {
                required: true,
              },
              {
                pattern: /^[a-zA-Z\sÀ-ỹ]+$/u,
                message: "${label} không chứa số và ký tự đặc biệt !! ",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "age"]}
            label="Tuổi"
            rules={[
              {
                type: "number",
                min: 1,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["user", "title"]} label="Tiêu đề">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "introduction"]}
            label="Nội dung"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
