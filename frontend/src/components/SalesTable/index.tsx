import React from 'react'
import NotificationButton from '../NotificationButton'
import * as S from './styles'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const SalesCard = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365))

  const [minDate, setMinDate] = React.useState(min)
  const [maxDate, setMaxDate] = React.useState(new Date())


  const titles = [
    {
      id: 1,
      data: '08/07/2021',
      vendedor: 'Mario',
      visitas: 10,
      vendas: 15,
      total: 'R$ 35000.00',
    },
    {
      id: 1,
      data: '08/07/2021',
      vendedor: 'Mario',
      visitas: 10,
      vendas: 15,
      total: 'R$ 35000.00',
    },
    {
      id: 1,
      data: '08/07/2021',
      vendedor: 'Mario',
      visitas: 10,
      vendas: 15,
      total: 'R$ 35000.00',
    },
    {
      id: 1,
      data: '08/07/2021',
      vendedor: 'Mario',
      visitas: 10,
      vendas: 15,
      total: 'R$ 35000.00',
    },
  ]

  return (
    <S.ContentWrapper>     
      <S.CardWrapper>
        <S.TitlePage>Vendas</S.TitlePage>
        
          <div>
            <S.InputWrapper>
              <DatePicker 
                selected={minDate}
                onChange={(date: Date) => { setMinDate(date)}}
                className=""
                dateFormat="dd/MM/yyyy"
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <DatePicker 
                  selected={maxDate}
                  onChange={(date: Date) => {setMaxDate(date)}}
                  className=""
                  dateFormat="dd/MM/yyyy"
                />
            </S.InputWrapper>
          </div>

          
            <S.SalesTable>
              <S.TableHeader>
                <div>ID</div>
                <div>Data</div>
                <div>Vendedor</div>
                <div>Visitas</div>
                <div>Vendas</div>
                <div>Total</div>
                <div>Notificar</div>
              </S.TableHeader>
              <S.TableBody>
                {titles.map((item) => (
                  <S.TableItem>
                    <div>{item.id}</div>
                    <div>{item.data}</div>
                    <div>{item.vendedor}</div>
                    <div>{item.visitas}</div>
                    <div>{item.vendas}</div>
                    <div>{item.total}</div>
                    <div>
                      <NotificationButton />
                    </div>
                  </S.TableItem>
                ))}
              </S.TableBody>
            </S.SalesTable>
        </S.CardWrapper>
      </S.ContentWrapper>
  )
}

export default SalesCard
