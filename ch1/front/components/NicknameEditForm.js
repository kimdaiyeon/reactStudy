import React from "react";
import { Button, Form, Input } from "antd";

const dummy ={
    name:'디와이',
};

const NicknameEditForm = () =>{
    return (
        <Form style={{marginBottom:'20px', border: '1px solid #d9d9d9', padding:'20px'}}>
            <Input value={dummy.name} addonBefore="닉네임"/>
            <Button type="primary">수정</Button>
        </Form>
    )
}

export default NicknameEditForm;