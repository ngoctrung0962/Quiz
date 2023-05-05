import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import avatar from "./assets/__avatar_url.png";
import senderAvatar from "./assets/senderAvatar.png";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function App() {
  const [dataConvertation, setDataConvertation] = useState({
    conversation: {
      participants: [
        {
          name: "John",
          avatar: "https://example.com/avatar1.png",
        },
        {
          name: "Jane",
          avatar: "https://example.com/avatar2.png",
        },
      ],
      messages: [
        {
          id: "1",
          sender: {
            name: "John",
            avatar: "https://example.com/avatar1.png",
          },
          content: "Hi Jane, how are you doing?",
          timestamp: "2023-05-05T10:15:00Z",
        },
        {
          id: "2",
          sender: {
            name: "Jane",
            avatar: "https://example.com/avatar2.png",
          },
          content: "Hey John, I'm good. How about you?",
          timestamp: "2023-05-05T10:16:00Z",
        },
        {
          id: "3",
          sender: {
            name: "John",
            avatar: "https://example.com/avatar1.png",
          },
          content: "I'm doing well too. Thanks for asking.",
          timestamp: "2023-05-05T10:17:00Z",
        },
        {
          id: "4",
          sender: {
            name: "Jane",
            avatar: "https://example.com/avatar2.png",
          },
          content: "Great to hear!",
          timestamp: "2023-05-05T10:18:00Z",
        },
        {
          id: "5",
          sender: {
            name: "John",
            avatar: "https://example.com/avatar1.png",
          },
          content: "I'm doing well too. Thanks for asking.",
          timestamp: "2023-05-05T10:17:00Z",
        },
        {
          id: "6",
          sender: {
            name: "Jane",
            avatar: "https://example.com/avatar2.png",
          },
          content: "Great to hear!",
          timestamp: "2023-05-05T10:18:00Z",
        },
        {
          id: "7",
          sender: {
            name: "John",
            avatar: "https://example.com/avatar1.png",
          },
          content: "I'm doing well too. Thanks for asking.",
          timestamp: "2023-05-05T10:17:00Z",
        },
        {
          id: "8",
          sender: {
            name: "John",
            avatar: "https://example.com/avatar2.png",
          },
          content: "Great to hear!",
          timestamp: "2023-05-05T10:18:00Z",
        },
      ],
    },
  });

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [isTyping, setIsTyping] = useState(false);

  const onSubmit = (data) => {
    const newData = {
      id: dataConvertation.conversation.messages.length + 1,
      sender: {
        name: "John",
        avatar: "https://example.com/avatar1.png",
      },
      content: data.content,
      timestamp: "2023-05-05T10:18:00Z",
    };
    setDataConvertation({
      conversation: {
        ...dataConvertation.conversation,
        messages: [...dataConvertation.conversation.messages, newData],
      },
    });

    // Tạo hiệu ứng loading 3s
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
    }, 5000);
    reset();
  };
  const dummy = useRef();

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [dataConvertation]);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="chat__container">
        <div className="chat__room">
          <div className="chat__header">
            <div className="chat__header__left">
              <img
                src={reactLogo}
                alt="react logo"
                className="sender__avatar"
              />
              <dir>
                <h4>BOT</h4>
                <p className="status__active">active</p>
              </dir>
            </div>

            <div className="chat__header__right">
              <i className="bi bi-three-dots"></i>
            </div>
          </div>
          <div className="chat__content">
            {dataConvertation.conversation.messages.map((message) => (
              <div
                key={message.id}
                className={`chat__message ${
                  message.sender.name === "John"
                    ? "chat__message__right"
                    : "chat__message__left"
                }`}
              >
                <div className="chat__message__content">
                  <p>{message.content}</p>
                  <span className="chat__timestamp">{message.timestamp}</span>
                </div>
                <div className="chat__message__avatar">
                  <img
                    src={message.sender.name === "John" ? avatar : senderAvatar}
                    alt="sender avatar"
                    className="chat__message__avatar"
                  />
                </div>
              </div>
            ))}

            {
              // Hiệu ứng loading
              isTyping && (
                <div className="typing__animation">
                  <div className="typing__dot"></div>
                  <div className="typing__dot"></div>
                  <div className="typing__dot"></div>
                </div>
              )
            }

            <span ref={dummy}></span>
          </div>

          <div className="chat__footer">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="input__sendMessage">
                <textarea
                  type="text"
                  placeholder="Hãy nhập nội dung"
                  {...register("content", { required: true })}
                />
                <i onClick={handleSubmit(onSubmit)} className="bi bi-send"></i>
              </div>
              {errors.content && (
                <span className="error__message">Vui lòng nhập nội dung</span>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
