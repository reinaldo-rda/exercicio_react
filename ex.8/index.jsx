import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDOM.render(
    <Familia lastName='Araujo'>
        <Member name='Reinaldo'/>
        <Member name='Matheus'/>
        <Member name='Heliana'/>
    </Familia>
, document.getElementById('app'))

