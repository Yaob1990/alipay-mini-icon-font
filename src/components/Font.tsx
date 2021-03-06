import React, { useEffect, useState } from "react";
import "./font.less";
import { Alert, Col, Divider, message, Row } from "antd";
import copy from "copy-to-clipboard";

export const Font = () => {
  const arrow = ["down", "up", "left", "right"];

  const type = [
    "qr",
    "share",
    "picture",
    "add-square",
    "file",
    "text",
    "minus-square",
    "barcode",
    "wallet",
    "scan-code",
    "receipt",
    "down-circle",
    "bill-note",
    "trash",
    "bill",
    "scan",
    "content",
    "circle",
    "play",
    "limit",
    "money",
    "link",
    "zoom-in",
    "koubei",
    "capslock",
    "time-5",
    "help",
    "net",
    "chat",
    "contacts",
    "appx",
    "question",
    "person-setting",
    "setting",
    "ant",

    "more",
    "more-1",
    "zoom-out",
    "money-circle",
    "voice",
    "good",
    "voice-limit",
    "people",
    "person-add",
    "download",
    "sad",
    "check",
    "logo-alipays",
    "person",
    "gift",
    "add-message",
    "alipay",
  ];

  const common = [
    "search",
    "location",

    "close",
    "close-circle",
    "eye-close",
    "eye",
    "add",
    "like",
    "warn",
    "selected",
    "collect",
  ];

  const solidType = [
    "koubei_",
    "star_",
    "chat_",
    "help_",
    "key_",
    "lock_",
    "people_",
    "voice-limit_",
    "location_",
    "phone_",
    "logo-alipay_",
    "person-delete_",
    "wait_",
    "apps_",
    "microphone_",
    "pen_",
    "close_",
    "question_",
    "down_",
    "certified-check_",
    "certified-warn_",
    "sad_",
    "ant_",
    "time-5_",
    "warn_",
    "person-circle_",
    "time-3_",
    "check_",
    "like_",
    "home",
    "eye_",
    "edit_",
    "mail_",
    "forbid_",
    "eye-limit_",
    "delete-person_",
    "address-book_",
    "phone-book_",
    "delete_",
  ];

  const onMouseEnter = (item: any) => {
    console.log(item);
  };

  const copyType = (item: string) => {
    console.log(item);
    copy(item);
    message.success("ε€εΆζε");
  };

  return (
    <Row justify="center" style={{ padding: "50px 0" }}>
      <Col span={18}>
        <Alert message="ζ―δ»ε?ε°η¨εΊεΎζ εΊοΌηΉε»εΎζ ε€εΆη±»εγ" type="info" />
        <h1 style={{ marginTop: "24px" }}>ζΉεη?­ε€΄</h1>
        <div className={"flex"}>
          {arrow.map((item) => {
            return (
              <div className={"box"} onClick={() => copyType(item)}>
                <div className={`font am-icon-${item}`}></div>
                <div className={"name"}>{item}</div>
                <div className={"copy"}>ε€εΆ</div>
              </div>
            );
          })}
        </div>

        <Divider />

        <h1>εΈΈη¨</h1>
        <div className={"flex"}>
          {common.map((item) => {
            return (
              <div className={"box"} onClick={() => copyType(item)}>
                <div className={`font am-icon-${item}`}></div>
                <div className={"name"}>{item}</div>
                {/*<div className={"copy"}>ε€εΆ</div>*/}
              </div>
            );
          })}
        </div>

        <Divider />

        <h1>εΆδ»</h1>
        <div className={"flex"}>
          {type.map((item) => {
            return (
              <div className={"box"} onClick={() => copyType(item)}>
                <div className={`font am-icon-${item}`}></div>
                <div className={"name"}>{item}</div>
                {/*<div className={"copy"}>ε€εΆ</div>*/}
              </div>
            );
          })}
        </div>

        <Divider />

        <h1>ε?εΊι£ζ Ό</h1>
        <div className={"flex"}>
          {solidType.map((item) => {
            return (
              <div className={"box"} onClick={() => copyType(item)}>
                <div className={`font am-icon-${item}`}></div>
                <div className={"name"}>{item}</div>
                {/*<div className={"copy"}>ε€εΆ</div>*/}
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
