import React from 'react'
import { connect } from 'unistore/preact'
import { actions } from './store'

export default connect(['messages', 'current'], actions)(
  ({ messages, current, add, change, remove }) => (
    <div className="messages">
      <form className="pv4 black-80" onSubmit={add}>
        <label for="name" class="f6 b db mb2 helvetica">
          Message <span class="normal black-60">(optional)</span>
        </label>
        <input
          onChange={e => change(e.target.value)}
          value={current}
          type="text"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          placeholder="New Message"
        />
      </form>
      <p className="helvetica">Total: {messages.length}</p>
      <ul class="list pl0 pa4 measure center">
        {messages.map((m, i) => (
          <li
            key={i}
            class="helvetica flex justify-between lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
          >
            {m}{' '}
            <button
              class="bn f6 link dim br1 ph3 pv1 mb2 dib white bg-red"
              onClick={() => remove(m)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
)
