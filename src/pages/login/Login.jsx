import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext.jsx";
import "../../styles/login.scss";
import logo from "../../assets/logos/QuizMaze-logo.png";
export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: values.email,
        password: values.password,
      });
      if (response.status === 200) {
        navigate("/");
        login(response.data.user);
      } else {
        message.error(`Hata: ${response.data.message}`);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      {<img className="login-logo" src={logo} alt="Logo" />}
      <div className="login-wrapper">
        <div className="form-wrapper">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={handleLogin}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Link className="sign-in-label" to="/register">
              Dont have an account? Sign in!
            </Link>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="submit-button"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="info-wrapper">
          <h1>Why QuizMaze</h1>
          <p>
            QuizMaze is the perfect platform to expand your knowledge and learn
            in a fun way. By choosing categories that match your interests and
            knowledge level, you can test yourself on topics that excite you the
            most. Setting the difficulty level ensures an ideal experience for
            both beginners and seasoned knowledge seekers. Our user-friendly
            interface provides an easy and accessible experience for users of
            all ages. With QuizMaze, learning and having fun has never been more
            enjoyable!
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
