import classes from './reg-popup.module.scss';

const RegPopup = () => {
  return (
    <div className={classes.popup}>
        <div className={classes.wrapper}>
            <div className={classes.popupCard}>
                <h2 className={classes.title}>Create a new account</h2>

                <form className={classes.form}>
                    <div className={classes.popupBox}>
                        <label htmlFor="name" className={classes.inputLabel}>Your name</label>
                        <input type="text" id='name' className={classes.input} placeholder='Name' />
                    </div>
                    <div className={classes.popupBox}>
                        <label htmlFor="surname" className={classes.inputLabel}>Your surname</label>
                        <input type="text" id='surname' className={classes.input} placeholder='Surname' />
                    </div>
                    <div className={classes.popupBox}>
                        <label htmlFor="email" className={classes.inputLabel}>Your email</label>
                        <input type="email" id='email' className={classes.input} placeholder='Email' />
                    </div>

                    <div className={classes.popupBox}>
                        <label htmlFor="password" className={classes.inputLabel}>Create password</label>
                        <input type="password" id='password' className={classes.input} placeholder='Password' />
                    </div>
                    <div className={classes.popupBox}>
                        <label htmlFor="confirm-password" className={classes.inputLabel}>Confirm your password</label>
                        <input type="password" id='confirm-password' className={classes.input} placeholder='Confirm password' />
                    </div>

                    <div className={classes.policy}>
                        <div className={classes.ctnr}>
                            <input id='policy' type="checkbox" className={classes.checkbox} />
                            <label htmlFor="policy" className={classes.cbx}></label>
                        </div>
                        <label for='policy' className={classes.policyText}>I have read and confirm my agreement with <a href="#">Privacy policy</a> & <a href="#">Terms of service</a>. </label>
                    </div>

                    <button className={classes.button}>Create</button>
                </form>

                <p className={classes.otherWay}>Already have an account? Just <button>log in</button>.</p>
            </div>
        </div>
    </div>
  );
}

export default RegPopup;