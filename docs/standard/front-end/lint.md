# 格式化检查

## 使用 ESLint 和 Prettier 进行代码格式化

项目沿用 SoybeanJS 团队的 `@soybeanjs/eslint-config` 来进行代码格式化。这个配置包含了 ESLint 和 Prettier 的配置，以及一些自定义的规则。

## 代码检查

项目默认集成 `lint-staged` 和 `simple-git-hooks` 来检查代码。

### lint-staged

`lint-staged` 是一个用于在 Git 提交之前运行脚本的工具。它允许你只对暂存的文件（即即将提交的文件）运行特定的命令，比如代码格式化、代码检查等。这有助于确保每次提交的代码都符合项目的代码规范，同时避免对整个项目进行不必要的处理。

安装 `lint-staged`:

```bash
pnpm i lint-staged -D
```

在 `package.json` 中添加:

```json
{
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

### simple-git-hooks

`simple-git-hooks` 是一个用于简化 Git 钩子（hooks）配置的工具。Git 钩子是一些脚本，可以在特定的 Git 事件发生时自动执行，例如提交前（pre-commit）、提交信息编写时（commit-msg）等。`simple-git-hooks` 通过在 `package.json` 中配置这些钩子，使得管理 Git 钩子变得更加简单和直观。

安装 `simple-git-hooks`:

```bash
pnpm i simple-git-hooks -D
```

在 `package.json` 中添加 git 钩子:

```json
{
  "simple-git-hooks": {
    "commit-msg": "pnpm sa git-commit-verify",
    "pre-commit": "pnpm typecheck && pnpm lint-staged"
  }
}
```

在 package.json 中添加脚本:

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  }
}
```

### 注意

<tips type="info">
  变更 <code>simple-git-hooks</code> 配置或取消 <code>simple-git-hooks</code> 时，先更改 <code>package.json</code> 中的 <code>simple-git-hooks</code> 对应的配置，然后运行 <code>pnpm run prepare</code> 使其生效。
</tips>

<tips type="danger">
  关闭 <code>lint-staged</code> 和 <code>simple-git-hooks</code> 会导致代码质量下降、开发效率降低、团队协作困难等问题。因此，在项目开发中，建议保持这些工具的启用状态，以确保代码的高质量和一致性。
</tips>

```bash
# 临时关闭校验（不推荐）
git commit -m "commit message" --no-verify
```
