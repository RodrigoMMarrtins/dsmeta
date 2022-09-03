import React from 'react'
import * as S from './styles'
import icon from '../../assets/notify-ic.svg'

const NotificationButton = () => {
  return (
    <S.ButtonWrapper>
        <img src={icon} alt="Notificar"/>
    </S.ButtonWrapper>
  )
}

export default NotificationButton