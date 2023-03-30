import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Singleform = () => {
    var[input,setInput]= useState({
      value1:'',
      value2:'',
      value3:''  
    })
    const inputHandler = (e)=>{
        const{name,value} = e.target
        setInput({...input,[name]:value})
    }
  return (
    <div>
        <Typography>{input.value1}</Typography>
      <TextField label='Firstname'name='value1'value={input.value1} onChange={inputHandler} />
      <br></br>
      <Typography>{input.value2}</Typography>
      <TextField label='Lastname'name='value2'value={input.value2} onChange={inputHandler} />
      <br></br>
      <Typography>{input.value3}</Typography>
      <TextField label='Collegename'name='value3'value={input.value3} onChange={inputHandler} />
      <br></br>
    </div>
  )
}

export default Singleform
