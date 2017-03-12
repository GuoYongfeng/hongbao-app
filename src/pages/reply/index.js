import React, { Component } from 'react'
import { render } from 'react-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';

const PlaceHolder = props => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '0.6rem',
    lineHeight: '0.6rem',
    width: '100%',
  }} {...props}
  >Block</div>
);

const WingBlankExample = () => (
  <div style={{ padding: '0.3rem 0' }}>
    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
);

let mountNode = document.getElementById('app')
ReactDOM.render(<WingBlankExample />, mountNode);
