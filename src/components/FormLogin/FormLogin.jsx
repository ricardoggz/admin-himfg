import {Button, Form, Image} from 'react-bootstrap'
import { formLogin } from './formLogin.module.css'

export const FormLogin = ()=>{
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
        <Form border='primary'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Departamento</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="1">CEMESATEL</option>
                    <option value="2">EDUCACIÓN MÉDICA CONTINUA</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Acceder
            </Button>
        </Form>
        </section>
    )
}