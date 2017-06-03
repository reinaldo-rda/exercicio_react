import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDOM.render(
    <Familia lastName='Araujo'>
        <Member name='Reinaldo'/>
    </Familia>
, document.getElementById('app'))

