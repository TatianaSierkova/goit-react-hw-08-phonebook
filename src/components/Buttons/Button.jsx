import { AddButton } from './Button.styled';
import propTypes from 'prop-types';
export const Button = ({ type, onClick, children }) => {
    return (
        <AddButton type={type} onClick={onClick}>
        {children}
        </AddButton>
    );
};

Button.propTypes = {
    type: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    children: propTypes.any.isRequired,
};