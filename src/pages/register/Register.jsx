import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.jsx";
import axios from "axios";
import logo from "../../assets/logos/QuizMaze-logo.png";
import "../../styles/login.scss";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { register } = useAuth();

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      if (response.status === 201) {
        register(response.data.newUser);
        navigate("/");
      } else {
        message.error(`Hata: ${response.data.message}`);
      }
    } catch {
      setMessage(
        "An error occurred while registering. Please try again later."
      );
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
            onFinish={handleRegister}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
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
            <Link className="sign-in-label" to="/login">
              Already have an account? Log in!
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

export default Register;
