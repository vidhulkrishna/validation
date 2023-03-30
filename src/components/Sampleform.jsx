import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[input,setInput] = useState();
    var[input2,setInput2] = useState();

    const inputHandle = (event)=>{
        setInput(event.target.value)
        console.log(input)
    }
    const inputHandle2= (e)=>{
        setInput2(e.target.value)
    }
  return (
    <div>
        <br /><br />
        <Typography>{input}</Typography>
      <TextField variant='outlined'label='First Name' onChange={inputHandle}/>
      <br /><br />
      <Typography>{input2}</Typography>   
      <TextField variant='outlined'label='Password' onChange={inputHandle2}/>
      <br /><br />
      <Button variant='contained'>submit</Button>
      
      
    </div>
  )
}

export default Sampleform
