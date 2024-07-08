NVM - Node Version Manager - Windows (NVM-WINDOWS) - Controle de versões do Node.
https://www.youtube.com/watch?v=Zrq8reSxfUU

Primeiro remova o node e o npm de sua máquina:
npm cache clean --force

Para remover no windows você pode usar o gerenciador de programas do windows e remover o node que removerá junto o npm.

Windows:
https://github.com/coreybutler/nvm-windows

https://github.com/coreybutler/nvm-windows/releases
Execute como administrador o setup:
nvm-setup.exe

Linux:
Veja:
https://www.youtube.com/watch?v=XlcHff3khcI

https://github.com/nvm-sh/nvm
Use o curl ou o wget ( instale antes, se não tiver na sua distro)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
ou
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

Se o nvm não ficar como um comando reconhecido, mesmo após fechar e reabrir o terminal, verifique no seu arquivo de cofiguração de terminal, por exemplo o ~/.bashrc (veja com more ~/.bashrc) se no final você tem as linhas:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

Brew:
For brew users, OSX:

To remove:

brew uninstall node;

# or `brew uninstall --force node` which removes all versions

brew cleanup;
rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
rm -rf ~/.npm;

To install:

brew install node;
which node # => /usr/local/bin/node
export NODE_PATH='/usr/local/lib/node_modules' # <--- add this ~/.bashrc

You can run brew info node for more details regarding your node installs.
Use este comando para ver as versões do node
nvm ls
Se não houver instalado ainda, você terá a resposta:
No installations recognized.

Veja:
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

Para instalar a mais recente versão de node e de npm:
nvm install latest

Para instalar uma versão específica use, por exemplo:
nvm install 15.5.0
nvm install 22.4.0

Para ver as versões:
nvm ls
nvm use 15.5.0
nvm use 22.4.0

Você pode ver as versões de node e de npm com:
node –version
ou
node -v

e
npm –version

Para desinstalar, use:
nvm uninstall 15.5.0
