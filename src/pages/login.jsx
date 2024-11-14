import React from "react";
import "./login.css";

// Ionicon 사용을 위해 React Icon 패키지나 라이브러리를 설치해 사용하는 방법이 있을 수 있습니다.
// 예를 들어 react-icons와 같은 패키지를 사용할 수도 있습니다.

const LoginForm = () => {
    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2>Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="forget">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <label>
                                <a href="#">Forgot password?</a>
                            </label>
                        </div>
                        <button type="submit">Log in</button>
                        <div className="register">
                            <p>
                                Don't have an account? <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
