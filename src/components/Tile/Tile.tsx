import React, {
    forwardRef,
    MouseEventHandler,
    ForwardRefRenderFunction,
    PropsWithChildren,
} from 'react';
import styled from '@emotion/styled';
import { IconName } from '../../icons/icon-constant';
export  type TileProps = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon: IconName;
    rightIcon: boolean;
};


const StyledTile = styled.button<TileProps>`
position:relative;
border:none;
display: inline-block;
box-sizing: border-box;
outline: none;
font-weight: 600;
font-size: 16px;
line-height: 22px;
cursor: pointer;
${({
    disabled,
    theme: {
        semantic: { border, spacing, color },
    },
}) => 
    `
    border-radius: ${border.radius.pill};
    padding: ${spacing.spacingM};
    background-color: ${!disabled ? color.bg.default : color.bg.disabled};
    `}  
`
    

const Tile: ForwardRefRenderFunction<
HTMLButtonElement,
PropsWithChildren<TileProps>
> = (
{
    disabled,
    rightIcon = true,
    children,
    onClick,
    ...props
},
ref
) => {
    return (
        <StyledTile
        type = "button"
        rightIcon = {rightIcon}
        onClick = {disabled ?  undefined : onClick}
        disabled = {disabled}
        ref= {ref}
        {...props}
        >
        {children}
        </StyledTile>  

    );
    
};
    

export default forwardRef(Tile)
