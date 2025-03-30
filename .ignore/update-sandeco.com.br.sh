#!/bin/bash

cd /opt/nginx-proxy

echo "📌 Parando e removendo o container do site..."
docker rm -f sandeco.com.br || echo "⚠️ Nenhum container do site encontrado"

echo "📌 Removendo a imagem antiga..."
docker rmi -f sandeco.com.br || echo "⚠️ Nenhuma imagem antiga removida"

echo "📌 Verificando se a nova imagem está disponível..."
if [ ! -f "/root/sites/sandeco.com.br.tar" ]; then
    echo "❌ ERRO: O arquivo da imagem não foi encontrado em /root/sites/sandeco.com.br.tar"
    exit 1
fi

echo "📌 Carregando a nova versão da imagem..."
docker load -i /root/sites/sandeco.com.br.tar

echo "📌 Verificando se a imagem foi carregada corretamente..."
docker images | grep sandeco.com.br

echo "📌 Subindo o novo container do site sem afetar os outros serviços..."
docker compose up -d --force-recreate sandeco.com.br

echo "📌 Aguardando 5 segundos para garantir que o container esteja rodando..."
sleep 5

echo "📌 Ajustando permissões do script de atualização..."
chmod +x /root/sites/update-sandeco.com.br.sh

echo "📌 Verificando se o container do site está rodando..."
docker ps | grep sandeco.com.br

echo "📌 Logs do novo container do site:"
docker logs sandeco.com.br --tail 50

echo "📌 Testando conexão HTTP..."
curl -I http://sandeco.com.br

echo "📌 Testando conexão HTTPS..."
curl -I https://sandeco.com.br

echo "✅ Atualização concluída!"
