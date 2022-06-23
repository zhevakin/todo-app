import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const Error = styled.div`
  color: red;
  font-size: 12px;
`

const Field = styled.div`
  margin-bottom: 10px;
`

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <input
          {...register('name', { required: true, minLength: 3 })}
          type="text"
          placeholder="Ваше имя"
        />
        {errors.name && (
          <>
            {errors.name.type === 'required' && (
              <Error>Пожалуйста заполните поле</Error>
            )}
            {errors.name.type === 'minLength' && (
              <Error>Имя не может быть короче трех символов</Error>
            )}
          </>
        )}
      </Field>
      <Field>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Ваш email"
        />
        {errors.email && <Error>Пожалуйста заполните поле</Error>}
      </Field>
      <Field>
        <input
          {...register('password', { required: true })}
          type="password"
          placeholder="Пароль"
        />
        {errors.password && <Error>Пожалуйста заполните поле</Error>}
      </Field>
      <button type="submit" disabled={!isValid}>
        Зарегистрироваться
      </button>
    </form>
  )
}

export default Register
