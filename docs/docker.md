# Docker

## mongodb

MongoDB 6.0 及以上版本使用以下命令：

```bash
mongosh admin
```

### old

```bash
mongod admin
```

## docker run

`docker run` 是一个用于创建和运行 Docker 容器的命令。它基于指定的镜像创建一个新的容器，并在容器内部执行指定的命令。

基本的用法如下：

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- `OPTIONS`：用于配置 `docker run` 命令的选项。常用选项包括：
  - `-d` 或 `--detach`：在后台（分离模式）运行容器。
  - `-p` 或 `--publish`：将容器的端口映射到主机上的端口。
  - `-v` 或 `--volume`：将主机的目录或文件挂载到容器中。
  - `--name`：为容器指定一个名称。
  - `-e` 或 `--env`：设置容器的环境变量。
- `IMAGE`：要基于的镜像的名称或标签。
- `COMMAND`：可选参数，要在容器内部执行的命令。
- `ARG...`：可选参数，命令的参数。

通过使用 `docker run`，您可以基于指定的镜像创建新的容器，并在容器内部执行特定的命令。在运行容器之前，Docker 首先检查本地是否已存在该镜像，如果不存在，则会下载相应的镜像。创建的容器将遵循指定的配置选项，如后台运行、端口映射、卷挂载、环境变量等。

`docker run` 是一个非常常用的命令，用于创建和运行 Docker 容器，使您能够快速启动应用程序、服务或其他容器化的工作负载。

## docker exec

`docker exec` 的基本用法如下：

```bash
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

- `OPTIONS`：用于配置 `docker exec` 命令的选项。常用选项包括：
  - `-i` 或 `--interactive`：保持 STDIN 打开，允许与命令交互。
  - `-t` 或 `--tty`：分配一个伪终端，以便进行终端仿真。
- `CONTAINER`：要执行命令的容器的标识符或名称。
- `COMMAND`：要在容器内部执行的命令。
- `ARG...`：命令的参数（可选）。

通过使用 `docker exec`，您可以在容器内部执行各种命令，如运行脚本、管理服务、执行工具命令等。这使您能够与正在运行的容器进行交互，并在容器内部进行必要的操作，而无需进入容器的交互式终端。

## docker images

`docker images` 是一个用于列出本地 Docker 镜像的命令。它显示了已经下载到本地主机上的 Docker 镜像的相关信息。

基本的用法如下：

```bash
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

- `OPTIONS`：用于配置 `docker images` 命令的选项。常用选项包括：
  - `-a` 或 `--all`：显示所有镜像，包括中间层镜像。
  - `--filter`：根据指定的条件过滤镜像。
- `REPOSITORY[:TAG]`：可选参数，用于过滤和显示特定的镜像。您可以根据镜像的仓库名称和标签来指定。

运行 `docker images` 命令将列出本地主机上的 Docker 镜像的信息，包括仓库名称、标签、镜像 ID、创建时间、大小等。每个镜像由仓库名称和标签标识。仓库名称用于指示镜像来自哪个源或组织，而标签则用于标识特定版本或变体。

通过使用 `docker images`，您可以查看本地主机上已下载的 Docker 镜像的列表，并获取有关这些镜像的详细信息。这对于管理和跟踪镜像的版本、大小以及所使用的仓库信息非常有用。

## docker ps

`docker ps` 是一个用于列出正在运行的 Docker 容器的命令。它显示了容器的相关信息，如容器 ID、名称、所使用的镜像、运行状态、端口映射等。

基本的用法如下：

```bash
docker ps [OPTIONS]
```

- `OPTIONS`：用于配置 `docker ps` 命令的选项。常用选项包括：
  - `-a` 或 `--all`：显示所有容器，包括已停止的容器。
  - `-q` 或 `--quiet`：只显示容器的 ID。
  - `--filter`：根据指定的条件过滤容器。
  - `-n` 或 `--last`：仅显示最后创建的指定数量的容器。
  - `-s` 或 `--size`：显示容器的磁盘使用情况。

运行 `docker ps` 命令将列出正在运行的 Docker 容器的信息。默认情况下，它只显示正在运行的容器。每个容器都有一个唯一的容器 ID、容器名称、所使用的镜像、运行状态、端口映射等信息。此外，还可以根据需要使用选项来过滤、限制结果集或显示更多详细信息。

通过使用 `docker ps`，您可以查看正在运行的 Docker 容器的状态和相关信息。这对于监视容器的运行状态、查看容器的端口映射、连接到正在运行的容器以及了解容器的其他属性非常有用。

## docker build

`docker build` 是一个用于构建 Docker 镜像的命令。它使用 Dockerfile 文件中的指令和上下文中的文件来构建一个新的镜像。

基本的用法如下：

```bash
docker build [OPTIONS] PATH | URL | -
```

- `OPTIONS`：用于配置 `docker build` 命令的选项。常用选项包括：
  - `-t` 或 `--tag`：为构建的镜像指定标签。
  - `-f` 或 `--file`：指定要使用的 Dockerfile 文件路径。
  - `--build-arg`：设置构建过程中的构建参数。
  - `--no-cache`：不使用缓存，从头开始构建镜像。
- `PATH | URL | -`：Dockerfile 文件的路径，或者一个包含 Dockerfile 的 URL，或者是 `-`，表示从标准输入读取 Dockerfile。

通过使用 `docker build`，您可以根据 Dockerfile 文件构建一个新的镜像。Dockerfile 文件定义了构建镜像所需的指令和配置，包括基础镜像、文件复制、依赖安装、环境设置等。在构建过程中，Docker 将按照 Dockerfile 中的指令逐步执行，并根据上下文中的文件和设置生成镜像。

构建的镜像可以使用 `-t` 选项指定标签，以便后续更容易地引用和使用。构建过程中还可以使用其他选项来自定义构建行为，如指定不同的 Dockerfile 文件、传递构建参数、禁用缓存等。

`docker build` 是一个非常常用的命令，用于根据 Dockerfile 构建自定义的镜像，以满足特定应用程序或服务的需求。

## Dockerfile

Dockerfile 是一个用于定义和构建 Docker 镜像的文本文件。它包含一系列的指令和配置，用于指导 Docker 在构建镜像时的操作。

Dockerfile 的用法如下：

1. 编写 Dockerfile 文件：在一个文本编辑器中创建一个名为 Dockerfile 的文件，并按照以下格式编写指令和配置。每个指令占据一行，并以关键字开头，后面是参数和选项。

   ```bash
   # Comment

   INSTRUCTION arguments
   ```

   其中，常用的指令包括：

   - `FROM`：指定基础镜像。
   - `RUN`：在容器内部执行命令。
   - `COPY` 或 `ADD`：将文件或目录复制到容器内部。
   - `WORKDIR`：设置工作目录。
   - `EXPOSE`：声明容器运行时监听的端口。
   - `CMD` 或 `ENTRYPOINT`：容器启动时要执行的命令。

2. 构建镜像：在包含 Dockerfile 的目录下运行以下命令来构建镜像。

   ```bash
   docker build [OPTIONS] PATH
   ```

   - `OPTIONS`：用于配置构建过程的选项，如指定标签 `-t`、禁用缓存 `--no-cache` 等。
   - `PATH`：Dockerfile 文件所在的路径。

   Docker 将按照 Dockerfile 中的指令和配置逐步执行构建过程，并根据上下文中的文件生成镜像。

3. 使用构建的镜像：构建成功后，您可以使用以下命令来运行和管理生成的镜像。

   ```bash
   docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
   ```

   - `OPTIONS`：用于配置容器运行时的选项，如端口映射 `-p`、容器名称 `--name` 等。
   - `IMAGE`：构建的镜像的名称。
   - `COMMAND` 和 `ARG...`：在容器内部执行的命令和参数。

   运行 `docker run` 命令将基于构建的镜像创建并运行一个容器。

通过使用 Dockerfile，您可以定义自定义的镜像，指定所需的软件、配置和环境。这样，其他人可以使用您的 Dockerfile 来构建相同的镜像，并确保一致的环境和应用程序配置。这种可重复性和可移植性使 Dockerfile 成为 Docker 生态系统中重要的组成部分。

## pull

`docker pull` 是一个用于从远程 Docker 仓库中拉取镜像的命令。它可以将指定的镜像下载到本地主机，以供后续使用。

基本的用法如下：

```bash
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

- `OPTIONS`：用于配置 `docker pull` 命令的选项。常用选项包括：
  - `--all-tags`：拉取指定镜像的所有标签。
  - `--disable-content-trust`：禁用内容信任验证。
- `NAME[:TAG|@DIGEST]`：要拉取的镜像的名称，可以包含可选的标签或摘要。

通过运行 `docker pull` 命令，您可以从远程 Docker 仓库中下载指定的镜像。Docker 会检查本地是否已经存在相同的镜像，如果不存在或指定了不同的标签或摘要，就会下载相应的镜像。

镜像名称通常以 `<仓库名称>/<镜像名称>` 的形式指定，例如 `ubuntu`、`nginx`。可选的标签用于标识不同版本或变体的镜像，例如 `ubuntu:20.04`、`nginx:latest`。摘要是一种唯一的标识符，可以精确指定一个特定的镜像版本。

使用 `docker pull` 命令，您可以轻松地从远程仓库中获取所需的镜像，以便在本地主机上运行和管理容器。这对于从公共或私有的 Docker 镜像仓库获取镜像非常有用，以便使用已经准备好的应用程序或服务镜像。
