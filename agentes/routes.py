from flask import Blueprint, render_template, request, jsonify

agentes_bp = Blueprint('agentes', __name__, template_folder='templates')

@agentes_bp.route('/agentes')
def agentes_home():
    return render_template('agentes.html')

@agentes_bp.route('/agentes/processar', methods=['POST'])
def processar_agente():
    mensagem = request.json.get('mensagem')

    # Aqui você pode integrar com seu sistema de agentes CrewAI, OpenAI, etc.
    resposta = f"Agente respondeu: '{mensagem[::-1]}'"  # só um exemplo invertendo a mensagem

    return jsonify({'resposta': resposta})
