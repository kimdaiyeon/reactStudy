import React, {useCallback, useState, memo} from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Checkbox, Button } from 'antd';

const TextInput = ({value}) => {
    return (
        <div>{value}</div>
    );
};

TextInput.propTypes = {
    value: PropTypes.string,
}

export const useInput = (initValue = null) =>{
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) =>{
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Signup =() =>{

    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
    }, [password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback((e) =>{
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);

    const onChangeTerm = useCallback((e) =>{
        setTermError(false);
        setTerm(e.target.value);
    }, []);

    return(
        <>
            <Form onSubmit={onSubmit} style={{padding:10}}>
                <TextInput value="135"></TextInput>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br/>
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-passwordCheck">비밀번호 확인</label>
                    <br/>
                    <Input name="user-passwordCheck" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                    {passwordError && <div style={{color:'red'}}>비빌번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                    {termError && <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{padding : 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;