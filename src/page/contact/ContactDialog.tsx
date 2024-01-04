import { Dialog, TextField } from '@mui/material'
import Textarea from '../../component/input/Textarea'
import Button from '@mui/material/Button';
import { BounceLoader } from 'react-spinners';

import './contact.scss'

type Props = {
    isOpen: boolean,
    action: () => void,
    handle: any,
    close: () => void,
    loading: boolean
}

function ContactDialog({isOpen, action, handle, close, loading}: Props) {
  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth >
          {
              loading? (<div className='loading'><BounceLoader color="#36d7b7" /></div>):(<form className='dialogue'>
            <h2 className='dialogue_tittle'>CONATCT ME NOW</h2>      
            <div className='userInfo'>
            <TextField id="outlined-basic" required label="Your name" variant="outlined" name='name' fullWidth={true} onChange={handle} />
            <TextField id="outlined-basic" required label="email" variant="outlined" name='email' fullWidth={true} onChange={handle} />
          </div>
              <TextField id="outlined-basic" required label="subject" variant="outlined" name='subject' />
              <Textarea name='message' placeholder='message' handle={handle} />
              <div className="Dialogbutton">
                  <Button variant="contained" onClick={action}>Envoyer</Button>
                  <Button variant="outlined" onClick={close} >Annuler</Button>
              </div>
        </form>)
        }
        
    </Dialog>
  )
}

export default ContactDialog