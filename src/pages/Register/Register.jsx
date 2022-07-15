import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperation';
import { Formik } from 'formik';
import { Wrapper, Titel, SignInForm, Input, LabelForm } from '../Pages.styled';
import { Button } from 'components/Buttons/Button';

const initialValues = {
    name: '',
    number: '',
    filter: '',
};

const Register = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
        case 'name':
            return setName(value);
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
        }
    };

    const handleSubmit = e => {
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <Wrapper>
        <Titel>Registration Page</Titel>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <SignInForm autoComplete="off">
            <LabelForm>Name </LabelForm>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
            />

            <LabelForm>Email </LabelForm>
            <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />

            <LabelForm>Password </LabelForm>
            <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
            />

            <Button type="submit" children="Register" />
            </SignInForm>
        </Formik>
        </Wrapper>
    );
};

export default Register;