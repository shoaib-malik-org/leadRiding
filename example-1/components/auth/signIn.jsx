import logo from '../../img/logo.png'
import Image from 'next/image'





export function SignIn({ css }) {
    console.log(css)
    if(css === undefined)
    {
        css = {}
        css.class = '',
        css.style = {color:'black'}
    }
    return (
        <li className="nav-item">
            <div className={`modal fade ${css.class}`} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" style={css.style}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">SIGN IN</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <main className="form-signin w-100 m-auto">
                                <form action='http://localhost:8000/auth/login' method='POST' className='px-5'>
                                    <div className='d-flex justify-content-center'>
                                        <Image
                                            src={logo.src}
                                            alt=""
                                            width={"100"}
                                            height={"100"}
                                            priority={'false'}
                                        />
                                    </div>
                                    <div className="form-floating mt-4">
                                        <input type="text" name='username' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mt-2">
                                        <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className='row'>
                                        <div className='col'>
                                            <div className="checkbox mb-3 mt-3">
                                                <label>
                                                    <input type="checkbox" value="remember-me" /> Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col mt-3 text-end text-primary pointer'>
                                            forget password
                                        </div>
                                    </div>
                                    <input type="submit" value={'Sign in'} className='w-100 btn btn-lg btn-dorange' />

                                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                                </form>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#exampleModalToggle" role="button">SIGN IN</a>
        </li>
    )

}