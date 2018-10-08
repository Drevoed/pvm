describe('pvm-packages', () => {
  it.concurrent('listing update should include dependants of changed packages', async () => {
    const repo = await initRepo('monorepo-new')
    await repo.touch('src/a/foo', 'change a')
    const { stdout: result } = await repo.execScript('pvm packages --list update')

    expect(result.split('\n').filter(x => !!x).sort()).toEqual([
      'src/a',
      'src/b',
    ])
  })

  it.concurrent('packages command should not fail in case no platform detected', async () => {
    const repo = await initRepo('monorepo-new')
    await runScript(repo, 'pvm packages --list update', {
      env: {
        PVM_PLATFORM_TYPE: '',
        PVM_TESTING_ENV: '',
      },
    })
  })
})
