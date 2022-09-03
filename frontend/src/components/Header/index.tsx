import React from 'react'
import * as S from './styles'
import icon from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Wrapper>
        <div>
            <S.Logo src={icon} alt="Logo DSMeta"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por 
                <a href="https://github.com/RodrigoMMarrtins">@RodrigoMMarrtins</a>
            </p>
        </div>
    </S.Wrapper>
  )
}

export default Header