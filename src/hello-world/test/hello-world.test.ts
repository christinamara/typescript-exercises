import HelloWorld from '../hello-world'

it('says hello world', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })