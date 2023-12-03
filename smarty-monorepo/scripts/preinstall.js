// preinstall js 只能在install后执行
console.log("run preinstall check")
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn(
      `\u001b[33mThis repository requires using pnpm as the package manager ` +
        ` for scripts to work properly.\u001b[39m\n`
    )
    process.exit(1)
}
  