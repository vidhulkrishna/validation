import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var[submitted,setSubmitted]=useState(false)
    var[input,setvalue]=useState({
        fname:''
    })
    var[Validation,setvalidation]=useState({
        fname:''
    })
    const handleinput =(e)=>{
        const{name,value} =e.target
        setvalue({...input,[name]:value})
        console.log(input)
    }
    const handleSubmitted=(e)=>{
        e.preventDefault()
        setSubmitted(true)
    }
    const checkvalidation=()=>{
        let error=Validation
        if(!input.fname.trim()){
        error.fname='first name is required'
        }else
        {
            error.fname=""
        }
        setvalidation(error)
    }
    useEffect(()=>{
        checkvalidation()
    })

  return (
    <div>
      <form onSubmit={handleSubmitted}>
        <br></br>
        <TextField label='firstname' name='fname' value={input.fname} onChange={handleinput}/>
        <br></br>
        {(Validation.fname&&submitted)&&<p>{Validation.fname}</p>}
        <Button type='submit' variant='contained'color='success'>sign</Button>
        </form>
    </div>
  )
}

export default Validation
