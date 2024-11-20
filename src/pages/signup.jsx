import React, { useRef } from "react";
import "./signup.css";
// Ionicon 사용을 위해 React Icon 패키지나 라이브러리를 설치해 사용하는 방법이 있을 수 있습니다.
// 예를 들어 react-icons와 같은 패키지를 사용할 수도 있습니다.

const LoginForm = () => {
    const pw1ck = useRef(null);
    const pw2ck = useRef(null);

    const checkPassword = (e) => {
        e.preventDefault();
        const p1 = pw1ck.current.value;
        const p2 = pw2ck.current.value;

        if (p1 !== p2) {
            alert("비밀번호가 일치하지 않습니다");
        } else {
            alert("비밀번호가 일치합니다");
        }
    };

    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form onSubmit={checkPassword}>
                        <h2>Sign Up</h2>
                        <div className="inputbox">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/mailimg.svg`}
                                alt="mail icon"
                                className="icon"
                            />
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/passwdimg.svg`}
                                alt="lock icon"
                                className="icon"
                            />
                            <input type="password" required ref={pw1ck} />
                            <label>Password</label>
                        </div>
                        <div className="inputbox">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/passwdimg.svg`}
                                alt="lock icon"
                                className="icon"
                            />
                            <input type="password" required ref={pw2ck} />
                            <label>Password Check</label>
                        </div>
                        <button type="submit" className="but">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
