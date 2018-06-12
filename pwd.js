const printDir = process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
    if (cmd === 'pwd') {
      const pworkinDir = process.cwd()
      process.stdout.write(pworkinDir)
      process.stdout.write('\nprompt >')
  }

})

module.export = {
  printDir
}
