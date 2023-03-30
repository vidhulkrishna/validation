import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Singam = () => {
    var[inputs,setInput] = useState({
       value:''
       
    })
    const handleInput = (e)=>{
        const {name,value} = e.target
        setInput({...inputs,[name]:value})
        console.log(inputs)
    }
  return (
    <div>
 <form>
    <br /><br />
    <TextField label='Firstname' name='fname' value={inputs.fname} onChange={handleInput} />
    
    <br /><br />
    <Button variant="contained">Login</Button>


 </form>
    </div>
  )
}

export default Singam


