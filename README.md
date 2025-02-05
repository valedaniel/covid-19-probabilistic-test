# 🦠 Avalia Coronavírus - Documentação

## 📖 Contexto do Projeto

Desenvolvido durante a pandemia de COVID-19, o aplicativo utiliza um **algoritmo probabilístico** para estimar riscos de infecção com base em sintomas reportados pelo usuário (febre, tosse, falta de ar, perda de olfato/paladar).

## 🚀 Instalação e Execução

### 📋 Pré-requisitos

- Node.js ≥14.x
- Java JDK 11
- Android Studio (para emulador Android) ou Xcode (para iOS)

### ⚙️ Configuração Inicial

```sh
# Clone o repositório
git clone https://github.com/valedaniel/covid-19-probabilistic-test.git

# Acesse a pasta do projeto
cd covid-19-probabilistic-test

# Instale as dependências
yarn

# Inicie o Metro Bundler
yarn start
```

### ▶️ Executando o Aplicativo

#### Android

```sh
# Em um terminal separado
yarn android
```

#### iOS

```sh
yarn ios
```

## 🛠️ Estrutura Técnica

| Tecnologia           | Descrição                                        |
| -------------------- | ------------------------------------------------ |
| **React Native**     | Versão 0.63.2 (base para desenvolvimento mobile) |
| **React Navigation** | Navegação entre telas de sintomas e resultados   |
| **Native Base**      | Componentes de interface do usuário              |
| **Axios**            | Integração com API de dados epidemiológicos      |

## ⚠️ Nota

Este projeto foi desenvolvido para fins educacionais e não substitui diagnóstico médico.
