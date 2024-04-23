# Windows 开发环境搭建

## WSL

```bash
# 安装 WSL 和 Linux 的默认 Ubuntu 发行版
wsl --install
# 列出可用的 Linux 发行版
wsl --list --online
# 列出已安装的 Linux 发行版
wsl --list --verbose
# 注销或卸载 Linux 发行版
wsl --unregister <DistributionName>
```

## Ubuntu 软件仓库镜像

[Ubuntu 软件仓库镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

## 更新和升级包

```bash
sudo apt update && sudo apt upgrade
```

## 设置 Clash 代理

```bash
#!/bin/sh
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
wslip=$(hostname -I | awk '{print $1}')
port=7890

PROXY_HTTP="http://${hostip}:${port}"

set_proxy() {
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"

    export https_proxy="${PROXY_HTTP}"
    export HTTPS_proxy="${PROXY_HTTP}"
}

unset_proxy() {
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
}

test_setting() {
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy:" $https_proxy
}

if [ "$1" = "set" ]; then
    set_proxy

elif [ "$1" = "unset" ]; then
    unset_proxy

elif [ "$1" = "test" ]; then
    test_setting
else
    echo "Unsupported arguments."
fi
```

### 设置代理

```bash
source ~/dev/scripts/proxy.sh test
source ~/dev/scripts/proxy.sh set
source ~/dev/scripts/proxy.sh unset
```

## Git 配置用户名和密码

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
```

## 安装 Nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

执行后重新打开终端。

## 安装 Node

```bash
nvm install 16
```

验证安装

```bash
nvm list
node -v
npm -v
```

安装包管理工具

```bash
npm i -g yarn pnpm
```

## FiraCode

[VS-Code-Instructions](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)

## 其他

### 安装 Zsh

```bash
sudo apt install zsh
```

#### 设置为默认

```bash
chsh -s $(which zsh)
```

如果执行 `echo $SHELL` 的结果为 `/bin/zsh` 说明安装成功。

#### 安装 Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 安装 Conda

https://conda.io/projects/conda/en/stable/user-guide/install/linux.html

### 安装 Jupyterlab 环境

```bash
conda create -n jupyterlab-ext --override-channels --strict-channel-priority -c conda-forge -c nodefaults jupyterlab=3 cookiecutter nodejs jupyter-packaging git
```

## 参考

1. https://github.com/ohmyzsh/ohmyzsh
2. https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH
3. https://github.com/nvm-sh/nvm
4. https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands
5. https://conda.io/projects/conda/en/stable/user-guide/install/linux.html
