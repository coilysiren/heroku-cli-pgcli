// @flow

import Pgcli from './pgcli'

test('it says hello to the world', async () => {
  let cmd = await Pgcli.mock()
  expect(cmd.out.stdout.output).toEqual('hello world!\n')
})

test('it says hello to jeff', async () => {
  let cmd = await Pgcli.mock('--name', 'jeff')
  expect(cmd.out.stdout.output).toEqual('hello jeff!\n')
})
