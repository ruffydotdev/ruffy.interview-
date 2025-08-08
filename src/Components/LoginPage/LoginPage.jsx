import React from 'react'

// Importing css file..
import './LoginPage.css'

// importing images..
import Logo from '../../assets/images/Logo.png'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__section">
        <div className="login-page__section__left">
          {/* Logo image */}
          <div className="login-page__section__left__logo">
            <img src={Logo} alt="" />
          </div>
          {/* Tagline */}
          <h3 className="login-page__section__left__header">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </h3>
        </div>
        <div className="login-page__section__right">
          <h4 className="login-page__section__right__header">
            Let’s get started <br></br>with a few simple steps
          </h4>

          {/* Form Start here */}
          <form className="login-page__section__right__form">
            <div className="login-page__section__right__form__field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="login-page__section__right__form__field">
              <label htmlFor="full-name">FullName</label>
              <input type="text" name="full-name" id="name" />
            </div>
            <div className="login-page__section__right__form__field">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="login-page__section__right__form__field">
              <button className="sign-up-btn">Sign Up</button>
            </div>
          </form>

          {/* Right Section Bottom part Start from here.... */}
          <div className="login-page__section__right__links">
            <h5>
              By signing up, you agree to our <a className="terms-and-servicer" href="#">Terms of Service.</a>
            </h5>
            <h5>
              Already have an account? <a className='log-in-link' href="">Log in</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
