# Como rodar

 - Acesse a pasta onde o arquivo Dockerfile está salvo;

 - Execute o comando `docker build -t <nome da imagem>`;

 - Para criar um container para a nossa imagem execute o comando `docker run --rm -d -p 1234:80 --name <nome do container> <nome da imagem>`;

 - Acesse o seu navegador e acesse o endereço `http://localhost:1234`