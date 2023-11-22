import './contact.scss'
import Input from '../../component/input/Input'
import Textarea from '../../component/input/Textarea'
import Button from '../../component/button/Button'
import LittleCardVariant from '../../component/layout/littlecard/LittleCardVariant'
import Location from '../../component/icon/Location'
import Phone from '../../component/icon/Phone'
import Mail from '../../component/icon/Mail'
import { useState } from 'react'
import axios from 'axios'


function Contact() {
    const [user, setUser]:any = useState();
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
                alert('message posted')
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
            <div className="grmeid">
                <div className="formGroup">
                    <label>Your name</label>
                    <Input placeholder='Your name' name="name" change={handle} />       
                </div>
                <div className="formGroup">
                    <label>Your Email</label>
                    <Input placeholder='Your Email' name='email' change={handle} />       
                </div>
            </div>
            <div className="formGroup">
                <label>Subject</label>
                <Input placeholder='Subject' name='subject' change={handle} />       
            </div>
            <div className="formGroup">
                <label>Subject</label>
                <Textarea placeholder='Message' name='message' handle={handle} />    
            </div>
            <div className='ButtonBox'>
                <Button children='Send' classname='serviceButton' handle={post} />      
            </div>
        </div>
    </>
  )
}

export default Contact