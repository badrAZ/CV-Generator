#!/usr/bin/env node

const aliases = require('../configs/aliases.json')
const fs = require('fs/promises')

async function main() {
  const paths = {}
  aliases.forEach(alias => {
    paths[`@${alias}/*`] = [`src/${alias}/*`]
  })

  await fs.writeFile(
    'tsconfig.paths.json',
    JSON.stringify({
      compilerOptions: {
        baseUrl: '.',
        paths,
      },
    })
  )
}

main().catch(console.error)
