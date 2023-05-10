# Windows 开发环境安装

## WSL 开发环境

### 安装 WSL 和 Linux 的默认 Ubuntu 发行版

```bash
wsl --install
```

### 更新 package

```bash
sudo apt update && sudo apt upgrade
```

### 安装 Zsh

```bash
sudo apt install zsh
```

### 设置为默认

```bash
chsh -s $(which zsh)
```

如果执行 `echo $SHELL` 的结果为 `/bin/zsh` 说明安装成功。

### 安装 Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### 安装 zsh 插件

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

```bash
plugins=( [plugins...] zsh-syntax-highlighting)
```

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```bash
plugins=(
    # other plugins...
    zsh-autosuggestions
)
```

### 配置用户名和密码

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
```

### 安装 Nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

执行后重新打开终端。

### 安装 Node

```bash
nvm install 18
```

验证安装

```bash
nvm list
node -v
npm -v
```

### 安装包管理工具

```bash
npm i -g yarn pnpm
```

### 其它

#### 安装 Conda

https://conda.io/projects/conda/en/stable/user-guide/install/linux.html

#### 安装 Jupyterlab 环境

```bash
conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git
```

#### 列出可用的 Linux 发行版

```bash
wsl --list --online
```

#### 列出已安装的 Linux 发行版

```bash
wsl --list --verbose
```

#### 注销或卸载 Linux 发行版

```bash
wsl --unregister <DistributionName>
```

#### 设置 Clash 代理

```bash
#!/bin/sh
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
wslip=$(hostname -I | awk '{print $1}')
port=7890

PROXY_HTTP="http://${hostip}:${port}"

set_proxy(){
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"

    export https_proxy="${PROXY_HTTP}"
    export HTTPS_proxy="${PROXY_HTTP}"
}

unset_proxy(){
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
}

test_setting(){
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy:" $https_proxy
}

if [ "$1" = "set" ]
then
    set_proxy

elif [ "$1" = "unset" ]
then
    unset_proxy

elif [ "$1" = "test" ]
then
    test_setting
else
    echo "Unsupported arguments."
fi
```

#### 设置代理

```bash
source ~/dev/scripts/proxy.sh test
source ~/dev/scripts/proxy.sh set
source ~/dev/scripts/proxy.sh unset
```

### 参考

1. https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH
2. https://github.com/nvm-sh/nvm
3. https://github.com/ohmyzsh/ohmyzsh
4. https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands
5. https://conda.io/projects/conda/en/stable/user-guide/install/linux.html
