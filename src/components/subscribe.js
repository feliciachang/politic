import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";

const DisplayButtons = styled.button`
  padding: 20px 30px;
  background-color: ${(props) => (props.black ? "black" : "white")};
  border: ${(props) => (props.black ? "2px solid white" : "2px solid black")};
  color: ${(props) => (props.black ? "white" : "black")};
  font-size: 20px;
  min-width: 300px;
  width: 300px;
  margin-bottom: 5%;
`;

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
      }}
    >
      {status === "sending" && <div style={{ color: "#000" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#06069A" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{
          fontSize: "15px",
          padding: 5,
          border: "none",
          borderBottom: "2px solid black",
          width: "100%",
        }}
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <br />
      <input
        style={{
          fontSize: "15px",
          padding: 5,
          border: "none",
          borderBottom: "2px solid black",
          width: "100%",
        }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      <button
        style={{
          backgroundColor: "white",
          padding: "10px 12px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

const Mailchimp = () => {
  const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
  return (
    <div
      style={{
        display: "flex",
        marginRight: "5%",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "10%",
          border: "2px solid black",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5% 10% 5% 10%",
          }}
        >
          <h1
            style={{
              maxWidth: "30vw",
              fontFamily: "Merriweather",
              fontSize: "20px",
            }}
          >
            Subcribe to The Politic
          </h1>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DisplayButtons black>Donate to Us!</DisplayButtons>
        <DisplayButtons>Explore Politic Merch</DisplayButtons>
      </div>
    </div>
  );
};

export default Mailchimp;
