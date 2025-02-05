<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>🦠 Avalia Coronavírus - Documentação</h1>

    <h2>📖 Contexto do Projeto</h2>
    <p>
        Desenvolvido durante a pandemia de COVID-19, o aplicativo utiliza um <strong>algoritmo probabilístico</strong> para estimar
        riscos de infecção com base em sintomas reportados pelo usuário (febre, tosse, falta de ar, perda de olfato/paladar).
    </p>

    <h2>🚀 Instalação e Execução</h2>

    <h3>📋 Pré-requisitos</h3>
    <ul>
        <li>Node.js ≥14.x</li>
        <li>Java JDK 11</li>
        <li>Android Studio (para emulador Android) ou Xcode (para iOS)</li>
    </ul>

    <h3>⚙️ Configuração Inicial</h3>
    <pre><code>

# Clone o repositório

git clone https://github.com/valedaniel/covid-19-probabilistic-test.git

# Acesse a pasta do projeto

cd covid-19-probabilistic-test

# Instale as dependências

yarn

# Inicie o Metro Bundler

yarn start
</code></pre>

    <h3>▶️ Executando o Aplicativo</h3>

    <h4>Android</h4>
    <pre><code>

# Em um terminal separado:

yarn android
</code></pre>

    <h4>iOS</h4>
    <pre><code>

yarn ios
</code></pre>

    <h2>🛠️ Estrutura Técnica</h2>
    <table border="1">
        <tr>
            <td>React Native</td>
            <td>Versão 0.63.2 (base para desenvolvimento mobile)</td>
        </tr>
        <tr>
            <td>React Navigation</td>
            <td>Navegação entre telas de sintomas e resultados</td>
        </tr>
        <tr>
            <td>Native Base</td>
            <td>Componentes de interface do usuário</td>
        </tr>
        <tr>
            <td>Axios</td>
            <td>Integração com API de dados epidemiológicos</td>
        </tr>
    </table>

    <footer>
        <p>⚠️ Nota: Este projeto foi desenvolvido para fins educacionais e não substitui diagnóstico médico.</p>
    </footer>

</body>
</html>
