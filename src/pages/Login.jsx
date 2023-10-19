import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Login = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Login</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Login</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>                    
            </section>
            <section className="tf-login tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-1">
                                Ingresa a Yala
                            </h2>

                            <div className="flat-form box-login-social">
                                <div className="box-title-login">
                                    <h5>Ingresar con una red social</h5>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-google-2"></i>
                                            <span>Google</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="sc-button style-2 fl-button pri-3">
                                            <i className="icon-fl-facebook"></i>
                                            <span>Facebook</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="flat-form box-login-email">
                                <div className="box-title-login">
                                    <h5>O ingresar con email</h5>
                                </div>

                                <div className="form-inner">
                                    <form action="#" id="contactform">
                                        <input id="email" name="email" tabIndex="2"  aria-required="true" type="email" placeholder="Correo" required />
                                        <input id="password" name="password" tabIndex="1" aria-required="true" required type="password" placeholder="Contraseña" />
                                        <div className="row-form style-1">
                                            <label>Recordar mi cuenta
                                                <input type="checkbox" />
                                                <span className="btn-checkbox"></span>
                                            </label>
                                            <Link to="#" className="forgot-pass">¿Olvidaste tu contraseña?</Link>
                                        </div>

                                        <button className="submit">Ingresar</button>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
