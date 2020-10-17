# atomic-system

## Introduce

Atomic System is a collection of styled systems with custom property names

## Prerequisites

- @styled-system/core

## How to use

```jsx
import { compose } from '@styled-system/core'
import { background } from 'atomic-system'

...
	compose(
		background
	)
...

<Box bgs='red' bgPosi='center' bgRepeat='no-repeat' />
```

## Todo

- [x] setup Env (Typescript)
- [x] initial styled-system
- [ ] create default variable
- [ ] create interface props
- [ ] create config
- [ ] add intellisense
- [ ] add documentation
- [ ] publish npm

## Contribution

- create interface props and creata config from table references
