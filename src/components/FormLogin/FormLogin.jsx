import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Button, Form, Image} from 'react-bootstrap'
import { useOnChange } from '../../hooks'
import { UserContext } from '../../contexts'
import { formLogin } from './formLogin.module.css'

export const FormLogin = ()=>{
    const { inputData, onChange, onReset } = useOnChange()
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    const onSubmit = async(evt)=>{
        evt.preventDefault()
        try {
            const resp = await axios.post(
                `${import.meta.env.VITE_BASE_URL}api/auth/login-admin`,
                inputData
            )
            if(!resp.data.rows){
                return alert(resp.data.message)
            }
            login(inputData)
            return navigate('/dashboard')
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <section className={formLogin}>
        <figure>
            <Image
                src="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp"
                rounded
                alt='HIMFG LOGO'
            />
        </figure>
        <span className='text-secondary'>
            Administrativo HIMFG
        </span>
        <Form border='primary' onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    type="text"
                    name='admin_user'
                    required
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    name='admin_password'
                    onChange={onChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>CEMESATEL</Form.Label>               
                <Form.Check
                    type="radio"
                    name='department_id'
                    onChange={onChange}
                    required
                    value='1'
                />
                <Form.Label>EDUCACIÓN MÉDICA CONTINUA</Form.Label>
                <Form.Check
                    type="radio"
                    value='2'
                    name='department_id'
                    onChange={onChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Acceder
            </Button>
        </Form>
        </section>
    )
}