import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Member from './member'

ReactDOM.render(
    <Familia>
        <h1>Familia</h1>
        <Member name='Reinaldo' lastName='Araújo' />
    </Familia>
, document.getElementById('app'))

