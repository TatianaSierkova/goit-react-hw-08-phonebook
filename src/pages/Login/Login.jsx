import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik } from 'formik';
import { Wrapper, Titel, SignInForm, Input, LabelForm } from '../Pages.styled';
import { Button } from 'components/Buttons/Button';

const initialValues = {
    name: '',
    number: '',
    filter: '',
};

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
        }
    };

    const handleSubmit = () => {
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <Wrapper>
        <Titel>Login Page</Titel>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <SignInForm autoComplete="off">
            <LabelForm>Email </LabelForm>
            <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />

            <LabelForm>Password</LabelForm>
            <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
            />

            <Button type="submit" children="Log In" />
            </SignInForm>
        </Formik>
        </Wrapper>
    );
};

export default Login;