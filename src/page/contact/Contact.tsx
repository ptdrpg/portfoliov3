import './contact.scss'
import LittleCardVariant from '../../component/layout/littlecard/LittleCardVariant'
import Location from '../../component/icon/Location'
import Phone from '../../component/icon/Phone'
import Mail from '../../component/icon/Mail'
import { useState } from 'react'
import axios from 'axios'
import ContactDialog from './ContactDialog'
import Button from '../../component/button/Button'


function   Contact() {
    const [user, setUser]: any = useState();
    const [contact, setContact] = useState<boolean>(false)
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {target} = e
      const { name, value } = target
      setUser({
        ...user,
        [name] : value
      })
        
    }
    const data = {
        service_id: 'service_47jsjjg',
        template_id: 'template_fi7g4rg',
        user_id: 'ZUNVVit05oNz8rgwz',
        template_params: {
            ...user
        }
    }
    const post = async () => {
        try {
            const postData = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (postData) {
                setContact(false);
            } else {
                alert('errore');
            }
            return postData;
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
        <div className="form-container">
            <div className="contact-information">
                <LittleCardVariant icone={<Location />} label='MY ADRESS' desc='Lot IIJ60ID Ivandry' />
                <LittleCardVariant icone={<Phone />} label='PHONE' desc='032 77 910 53' />
                <LittleCardVariant icone={<Mail />} label='EMAIL' desc='pagielamizael@gmail.com' />
              </div>
              <div className='contactButton'>
                <Button children='CONTACT ME' classname='serviceButton' handle={()=> setContact(true)}/>
              </div>
            {
                  contact && <ContactDialog isOpen={contact} action={post} handle={handle} close={()=> setContact(false)} />     
            }
          </div>
    </>
  )
}

export default Contact