FROM python:3.11-slim

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala dependências
RUN pip install --no-cache-dir --upgrade pip \
 && pip install --no-cache-dir -r requirements.txt

# Exponha a porta 80 para nginx-proxy
EXPOSE 80

# Usa Gunicorn para rodar app:app do app.py
CMD ["gunicorn", "--bind", "0.0.0.0:80", "app:app"]

