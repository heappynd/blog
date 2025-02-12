### 准备工作

1. **下载 Chrome 浏览器**
2. **更新 winget**  
   确保 winget 工具为最新版本。
3. **准备科学上网工具**  
   确保已设置并正常使用科学上网工具。
4. **下载 PowerShell**  
   使用以下命令安装 PowerShell：
   ```bash
   winget install --id Microsoft.PowerShell --source winget
   ```
5. **下载 Git**  
   使用以下命令安装 Git：
   ```bash
   winget install --id Git.Git -e --source winget
   ```
6. **下载 VSCode**  
   访问 [VSCode 下载页面](https://code.visualstudio.com/Download) 进行下载。
7. **下载字体**  
   下载并安装字体 [LxgwWenKai](https://github.com/lxgw/LxgwWenKai)。

### Git 设置

配置 Git 用户信息：

```bash
git config --global user.name heappynd
git config --global user.email heappynd@163.com
```

### Node.js 设置

1. 访问 [fnm GitHub 页面](https://github.com/Schniz/fnm) 下载并安装 fnm。
2. 安装 `fnm`：
   ```bash
   winget install Schniz.fnm
   ```
3. 配置 PowerShell 设置，参考 [fnm PowerShell 设置说明](https://github.com/Schniz/fnm?tab=readme-ov-file#powershell)。

### 安装 Node.js 和相关工具

1. 安装 Node.js LTS 版本：
   ```bash
   fnm install --lts
   ```
2. 安装 Node.js 18 版本：
   ```bash
   fnm install 18
   ```
3. 使用 npm 安装全局工具：
   ```bash
   npm i -g yarn pnpm @antfu/ni http-server nrm --registry=https://registry.npmmirror.com
   ```

### 设置淘宝源

使用 nrm 设置淘宝源：

```bash
nrm use taobao
```

### 解决 @antfu/ni 和 PowerShell 的冲突

如遇冲突，参考 [@antfu/ni GitHub 页面](https://github.com/antfu-collective/ni?tab=readme-ov-file#conflicts-with-powershell) 解决。


### 附加

[WinGet中文源](https://mirrors.ustc.edu.cn/help/winget-source.html)
