import React, { useEffect, useState } from 'react'
import './MainBag.css'
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepContent, Button, FormControlLabel, Typography, Radio } from '@material-ui/core';
import Bag from './Bag';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Link } from 'react-router-dom';
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import CloseIcon from '@material-ui/icons/Close'


function MainBag() {
    const useStyles = makeStyles((theme) => ({
        root: {
          flex: 0.6,
          borderRight: "2px solid lightgrey",
          paddingLeft: "8%"
        },
        button: {
          marginTop: theme.spacing(6),
          marginRight: theme.spacing(1),
        },
        actionsContainer: {
          marginBottom: theme.spacing(10),

        },
        resetContainer: {
          padding: theme.spacing(3),
        },
      }));
    
      const getSteps = () => {
        return ['Account', 'Delivery Address', 'Payment Method'];
      }
    
      const getStepContent = (step) =>{
        switch (step) {
          case 0:
            return `To login enter your mobile number`;
          case 1:
            return 'Select your Delivery Address from the existing one';
          case 2:
            return `Select your Payment Method`;
          default:
            return 'Unknown step';
        }
      }

    const classes = useStyles();
    const [activeStep, setactiveStep] = useState(0);
    const [isClicked, setisClicked] = useState(false)
    const steps = getSteps();

    const handleNext = () => {
    setactiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
    setactiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
    setactiveStep(0);
    };

    const selectAddress = () =>{
        setisClicked(!isClicked)
    }

    const [bagTest, setbagTest] = useState("sss")
    const [popUp, setpopUp] = useState(false)
    const [inputs, setinputs] = useState({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    })

    const handleinputs = (e) =>{
      setinputs({
          ...inputs,
          [e.target.name]: e.target.value
      })
    }

    useEffect(() => {
        if(inputs.input1 && inputs.input2 && inputs.input3 && inputs.input4 ){
            setpopUp(false)
            handleNext()
            setinputs({
              input1: '',
              input2: '',
              input3: '',
              input4: '',
            })
        }

    }, [inputs])

    return (
        <>
        {bagTest ? 
        <div className="MainBag">
            <div  id="BagDeliveryInfo" className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer} id="DeliverySteps" >
                            <div>
                                {activeStep === 0 ?
                                <div className="Sub">
                                    <h3>Mobile number</h3>
                                    <div className="Login_Input">
                                        <input type="text" />
                                        <Button variant="contained" color="primary" onClick={() => setpopUp(true)}>Login</Button>
                                    </div>
                                </div> 
                                : 
                                    activeStep === 1 ? 
                                    <>
                                    <div className="Bag__Address Sub">
                                        <div onClick={selectAddress} style={{ border: `${isClicked ? '2px solid #2766cc': " "}`, color: `${isClicked ? '#2766cc': ''}` }}>
                                            <h5>sarah something</h5>
                                            <p>No 7. Kemfat street ajah Lagos, Nigeria</p>
                                            <p>+23481 589 736 92</p>
                                        </div>

                                        <div>
                                            <span><AddRoundedIcon /> Add New Address</span>
                                        </div>
                                    </div>

                                    <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>Next</Button>
                                    </>
                                    : 
                                    <div className="placeOrder">
                                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Cash on delivery" />
                                        <Link to="/OrderSuccess" style={{ textDecoration: "none", color: ""}}><button onClick={handleReset}>Place Order</button></Link>
                                    </div>
                                }
                            </div>
                        </div>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            </div>

            <Bag />
        </div>
            : 
        <div className="MainBag__empty">
            <div>
                <SentimentDissatisfiedRoundedIcon />
                <span>
                    <h3>It's empty here</h3>
                    <p>Start shopping to add items to your bag</p>
                </span>

                <Link to="/" style={{ textDecoration: "none", color: ""}}><button>Back to home page</button></Link>
            </div>
        </div>
            }
          <div className="VerifyNum" style={{ display: `${!popUp ? "none" : ""}` }}>
              <div className="VerifyNum__header">
                  <h2>Verify your number</h2>
                  <CloseIcon onClick={() => setpopUp(false)} />
              </div>

              <p>please enter the verification code sent via SMS to +2348158973692</p>

              <div className="Verifynum__inputs">
                  <input type="text" value={inputs.input1} name="input1" maxlength='1' onChange={handleinputs} />
                  <input type="text" value={inputs.input2} name="input2" maxlength='1' onChange={handleinputs} />
                  <input type="text" value={inputs.input3} name="input3" maxlength='1' onChange={handleinputs} />
                  <input type="text" value={inputs.input4} name="input4" maxlength='1' onChange={handleinputs} />
              </div> 

              <h3>Resend code</h3>
          </div>
        </> 
    )
}

export default MainBag;

