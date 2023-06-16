import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import { validarEmail, validarPassword, validarName } from '../../Utils/validadores'
import { NavLink, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import UserService from '../../Services/UserService'

const userService = new UserService()

const Register = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.register({
        name: form.name,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      console.log('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='name'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Button
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true}
        />
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="/">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Register;