import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { act, create } from 'react-test-renderer'

import { Counter } from './index'

describe('Counter component tests', () => {
  test('it render', () => {
    const counter = create(<Counter value={1} />)
    const instance = counter.root
    const div = instance.findByType('div')
    expect(div.children[0]).toBe('0')
  })
  test('it increment by value', async () => {
    const counter = create(<Counter value={2} />)
    const instance = counter.root
    const button = instance.findByType('button')
    await act(async () => {
      button.props.onClick()
    })
    const div = instance.findByType('div')
    expect(div.children[0]).toBe('2')
  })
})
