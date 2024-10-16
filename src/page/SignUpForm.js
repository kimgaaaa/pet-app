import React, {useState, useRef} from 'react';
import './signup.scss';
import { IoMdCheckmark } from "react-icons/io";

const SignUpForm = () => {
    const idInputRef=useRef(null);
    const pwInputRef=useRef(null);
    const nmInputRef=useRef(null);
    const phoneInputRef=useRef(null);

    const [id, setId]=useState('');
    const [pw, setPw]=useState('');
    const [pw2, setPw2]=useState('');
    const [nm, setNm]=useState('');
    const [phone, setPhone]=useState('');
    
    const idRule=/^[a-z0-9]{4,16}$/;
    const pwRule=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/;
    const nmRule=/^[a-zA-Z가-힣]{1,20}$/;
    const phoneRule=/^\d{8}$/;

    const [messages, setMessages]=useState({
        id:{text:'', color:''},
        pw:{text:'', color:''},
        pw2:{text:'', color:''},
        nm:{text:'', color:''},
        phone:{text:'', color:''}
    });
    const handleMessageChange = (key, text, color) => {
        setMessages((prevMessages)=>({
            ...prevMessages,
            [key]:{text, color}
        }))
    }
    const handleId = (event) => {
        const newValue=event.target.value;
        setId(newValue)
        if(idRule.test(newValue)){
            handleMessageChange('id', '사용 가능한 아이디 입니다', 'success-color');
        }else if(newValue===""){
            handleMessageChange('id', '아이디를 입력해 주세요', 'error-color');
        } else{
            handleMessageChange('id', '아이디는 영문/소문자, 숫자 4~16글자 이상 가능합니다', 'success-color');
            setId('');
        }
    }

    const handlePw = (event) => {
        const newPwValue=event.target.value;
        setPw(newPwValue)
        if(pwRule.test(newPwValue)){
            handleMessageChange('pw', '사용 가능한 비밀번호 입니다', 'success-color');
        }else if(newPwValue===""){
            handleMessageChange('pw', '비밀번호를 입력해 주세요', 'error-color');
        } else{
            handleMessageChange('pw', '비밀번호는 영문/대소문자, 숫자, 특수문자 조합 8~16글자 가능합니다', 'success-color');
            setPw('');
        }
    }

    const handlePw2 = (event) => {
        const newPw2Value=event.target.value;
        setPw2(newPw2Value)
        if(pw===""){
            handleMessageChange('pw', '비밀번호를 입력해 주세요.', 'error-color');
        }else if(newPw2Value===pw){
            handleMessageChange('pw2', '비밀번호가 일치합니다.', 'seccess-color');
        }else if(newPw2Value===""){
            handleMessageChange('pw2', '비밀번호를 입력해 주세요.', 'error-color');
            setPw2('');
        } else{
            handleMessageChange('pw', '비밀번호가 일치하지 않습니다.', 'error-color');
            setPw2('');
        }
    }

    const handleNm = (event) => {
        const newNmValue=event.target.value;
        setNm(newNmValue)
        if(nm===""){
            handleMessageChange('nm', '이름을 입력해 주세요.', 'error-color');
        }else if(newNmValue===nm){
            handleMessageChange('nm', '사용 가능합니다.', 'seccess-color');
        }
    }

    const handlePhone = (event) => {
        const newPhoneValue=event.target.value;
        setNm(newPhoneValue)
        if(phone===""){
            handleMessageChange('phone', '휴대전화 번호를 입력해 주세요.', 'error-color');
        }else if(newPhoneValue===nm){
            handleMessageChange('phone', '사용 가능합니다.', 'seccess-color');
        }
    }


    return (
        <div className='signWrap'>
            <h2>회원가입</h2>
            <fieldset className="signUpArea">
                <form action="#" method='post' name="signup">
                    <ul>
                        <li className="id-section">
                            <div className="area-style">
                                <label htmlFor="idArea" className='label-style'>아이디</label>
                                <input ref={idInputRef} type="text" id="idArea" require size={20} value={id} onChange={(event)=>{setId(event.target.value)}} onBlur={handleId}/>
                                <span className={`mes-style ${messages.id.color}`}>{messages.id.text}</span>
                                <p className="help-style"><IoMdCheckmark />영문/소문자, 숫자 4-16자</p>
                            </div>
                        </li>
                        <li className="pw-section">
                            <div className="area-style">
                                <label htmlFor="pwArea" className='label-style'>비밀번호</label>
                                <input ref={pwInputRef} type="text" id="pwArea" require size={20} value={pw} onChange={(event)=>{setPw(event.target.value)}} onBlur={handlePw}/>
                                <span className={`mes-style ${messages.pw.color}`}>{messages.pw.text}</span>
                                <p className="help-style"><IoMdCheckmark />영문/대소문자, 숫자, 특수문자 조합 8-16자</p>

                                <br/>
                                
                                <label htmlFor="pw2Area" className='label-style'>비밀번호 확인</label>
                                <input type="text" id="pw2Area" require size={20} value={pw2} onChange={(event)=>{setPw2(event.target.value)}} onBlur={handlePw2}/>
                                <span className={`mes-style ${messages.pw2.color}`}>{messages.pw2.text}</span>
                            </div>
                        </li>

                        <li className="name-section">
                            <div className="area-style">
                                <label htmlFor="nmArea" className='label-style'>이름</label>
                                <input type="text" id="nmArea" require size={20} value={nm} onChange={(event)=>{setNm(event.target.value)}} onBlur={handleNm}/>
                                <span className={`mes-style ${messages.nm.color}`}>{messages.nm.text}</span>
                            </div>
                        </li>

                        <li className="phone-section">
                            <div className="area-style">
                                <label htmlFor="phoneArea" className='label-style'>휴대전화</label>
                                <div className="flexBox">
                                    <section className="select-style" id='phoneNumber'>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="019">019</option>
                                        <option value="018">018</option>
                                        <option value="016">016</option>
                                    </section>
                                    <span>&nbsp;&nbsp;</span>
                                    <input ref={phoneInputRef} type="text" id="phoneArea" require size={20} value={phone} onChange={(event)=>{setPhone(event.target.value)}} onBlur={handlePhone}/>
                                    <span className={`mes-style ${messages.phone.color}`}>{messages.phone.text}</span>
                                </div>
                                
                            </div>
                        </li>

                        
                    </ul>
                </form>
            </fieldset>
        </div>
    );
};

export default SignUpForm;