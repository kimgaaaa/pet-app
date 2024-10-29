import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';
import {isActiveToken} from './AccessTokenContext';

const Header = () => {
   const [accessResult, setAccessResult]=useState(null);
   const [user_id, setUserId]=useState(null);
   const accessToken=localStorage.getItem('accessToken');
   function logout(){
      localStorage.removeItem(accessToken);
      setAccessResult(false);
      window.location.href="/"
   }
   useEffect(()=>{
      const verifyToken = async () =>{
         const result = await isActiveToken(accessToken);
         setAccessResult(result.accessResult);
         setUserId(result.user_id);
      }
      verifyToken();
   }, [accessToken, accessResult])
   return (
      <div className='headerWrap'>
         <div className="header-area">
            <div className="logo">
               <Link to="/"><img src={process.env.PUBLIC_URL+ "/img/logo.png"} alt="" /></Link>
            </div>
            <div className="nav">
               <ul className='signUpandlogin'>
                    {
                     accessResult == true ? (<li >
                        <ul>
                           <li className='user-info'>{user_id}님 반갑습니다.</li>
                           <li className='logout' onClick={() =>logout()}>로그아웃</li>
                        </ul>
                     </li>) :(<li>
                     <Link to="/login">로그인</Link>
                    </li>)
                    }
                  <li>
                     <Link to="/signup">회원가입</Link>
                  </li>
               </ul>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                     
                  </li>
                  <li><Link to="/about">About</Link></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Header;