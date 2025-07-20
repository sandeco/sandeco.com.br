from flask import Flask, render_template, send_from_directory, request, flash, redirect, url_for
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)

# Configuração do Flask-Mail
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

# Chave secreta para flash messages
app.secret_key = os.urandom(24)

# Inicializa o Flask-Mail
mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)


@app.route('/jornalistas')
def jornalistas():
    return render_template('jornalistas.html')

@app.route('/mentoria-ai')
def mentoria_ai():
    return render_template('mentoria-ai.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    try:
        # Obtém os dados do formulário
        nome = request.form.get('nome')
        funcao = request.form.get('funcao')
        empresa = request.form.get('empresa')
        cidade = request.form.get('cidade')
        data = request.form.get('data')
        horario = request.form.get('horario')
        celular = request.form.get('celular')
        email = request.form.get('email')
        formato = request.form.get('formato')
        quantidade = request.form.get('quantidade')

        # Cria o corpo do e-mail
        email_body = f"""
        Nova solicitação de palestra recebida:

        Nome: {nome}
        Função: {funcao}
        Empresa: {empresa}
        Cidade: {cidade}
        Data: {data}
        Horário: {horario}
        Celular: {celular}
        E-mail: {email}
        Formato da Palestra: {formato}
        Quantidade de Palestras: {quantidade}
        """

        # Cria a mensagem
        msg = Message(
            subject='Nova Solicitação de Palestra',
            recipients=[os.getenv('MAIL_PHYSIA')],
            body=email_body
        )

        # Envia o e-mail
        mail.send(msg)

        # Retorna uma mensagem de sucesso
        flash('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.', 'success')
        return redirect(url_for('index', _anchor='formulario'))

    except Exception as e:
        # Em caso de erro, retorna uma mensagem de erro
        print(f"Erro ao enviar e-mail: {str(e)}")
        flash('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.', 'error')
        return redirect(url_for('index', _anchor='formulario'))

@app.route('/submit_mentoria', methods=['POST'])
def submit_mentoria():
    try:
        # Obtém os dados do formulário de mentoria
        nome = request.form.get('nome')
        email = request.form.get('email')
        profissao = request.form.get('profissao')
        motivacao = request.form.get('motivacao')

        # Cria o corpo do e-mail
        email_body = f"""
        Nova inscrição na Mentoria de IA para Jornalistas:

        Nome: {nome}
        E-mail: {email}
        Profissão/Área: {profissao}
        Motivação: {motivacao}
        """

        # Cria a mensagem
        msg = Message(
            subject='Nova Inscrição - Mentoria IA para Jornalistas',
            recipients=[os.getenv('MAIL_PHYSIA')],
            body=email_body
        )

        # Envia o e-mail
        mail.send(msg)

        # Retorna uma mensagem de sucesso
        flash('Sua inscrição foi enviada com sucesso! Você receberá o link de acesso por email.', 'success')
        return redirect(url_for('mentoria_ai', _anchor='inscricao'))

    except Exception as e:
        # Em caso de erro, retorna uma mensagem de erro
        print(f"Erro ao enviar inscrição: {str(e)}")
        flash('Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.', 'error')
        return redirect(url_for('mentoria_ai', _anchor='inscricao'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001) 