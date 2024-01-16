export default Page

import React, { useState } from 'react'
import { LocaleText } from '../../renderer/LocaleText'

function Page() {
  return (
    <>
      <h1>
        <LocaleText>Hello</LocaleText>
      </h1>
      <p>
        <LocaleText>Another page</LocaleText>.
      </p>
      <p>
        <Counter />
      </p>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      <LocaleText>Counter</LocaleText> {count}
    </button>
  )
}
