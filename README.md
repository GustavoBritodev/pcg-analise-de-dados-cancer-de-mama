# PCG: Análise Exploratória, Modelagem e Storytelling com Dados — Estudo de Caso: Duke Breast Cancer

Este repositório contém o pipeline completo de Análise Exploratória de Dados (EDA) e Estatística Descritiva desenvolvido para a **Pesquisa Curricularizada de Graduação (PCG)** do curso de Ciência da Computação / Sistemas de Informação da Universidade Católica de Santos. 

O objetivo principal da pesquisa é analisar dados clínicos, demográficos e moleculares do ecossistema de pacientes do estudo *Duke Breast Cancer*, mapeando padrões de comportamento da doença e identificando fatores preditivos para o sucesso do tratamento neoadjuvante.

## 👥 Integrantes do Projeto
* Arthur Santana Santos (5751215)
* Gustavo Martinho Santos de Brito (4105388)
* Miguel Dantas da Silva Vito (1119317)
* Pedro Henrique Valença D'Almeida (5052862)

---

## 🎯 Perguntas de Pesquisa & Roteiro de Storytelling

O projeto e as células do Jupyter Notebook foram arquitetados de forma linear para simular uma apresentação executiva e acadêmica, respondendo de forma aprofundada a 5 perguntas centrais:

1. **Contexto Geral (O Panorama da Doença):** Como a idade das pacientes se distribui no nosso conjunto de dados e de que forma isso se relaciona com a gravidade ou o estágio do câncer no momento do diagnóstico?
2. **Identificação de Padrões (As Características Clínicas):** Existe alguma relação visual clara entre o tamanho do tumor e a probabilidade de a doença ter se espalhado para os linfonodos?
3. **Análise de Subgrupos (Os Tipos de Câncer):** Como as informações sobre os diferentes subtipos da doença e os receptores hormonais nos ajudam a agrupar e a entender melhor o perfil das pacientes?
4. **Inconsistências e Qualidade dos Dados:** Quais informações clínicas estão mais ausentes ou incompletas na base de dados e qual é a melhor estratégia para lidar com essas falhas sem prejudicar a análise?
5. **O Desfecho (O Insight Estratégico):** Ao observar os dados históricos disponíveis, quais características iniciais parecem ser mais comuns nas pacientes que tiveram uma boa resposta aos tratamentos médicos?

---

## 🏗️ Estrutura do Repositório

    ├── Dataset/
    │   └── Clinical_and_Other_Features.csv  # Dataset original com dados clínicos (separador ';')
    ├── notebook.ipynb                       # Jupyter Notebook estruturado (Código e Markdown)
    └── README.md                            # Documentação principal do repositório

---

## ⚙️ Pipeline de ETL e Governança de Dados (Tratamento da Pergunta 4)

O dataset original possui strings específicas (`NA`, `NC`, `NP`, `x`) utilizadas pelo corpo médico para indicar ausência de dados, dados não coletados ou não pertinentes. Por padrão, o Pandas interpreta essas colunas como texto (`str`), o que gera erros impeditivos de conversão matemática (como o `TypeError` ao executar métodos numéricos ou `.abs()`).

### Estratégia de Solução Aplicada:
1. **Mapeamento de Nulos na Ingestão:** O carregamento do CSV foi parametrizado usando `na_values=['NA', 'NC', 'NP', 'x', '']` para forçar o Pandas a converter esses registros em `NaN` reais em nível de memória.
2. **Coerção de Tipos:** A coluna de tempo/idade foi explicitamente forçada para tipo numérico via `pd.to_numeric(..., errors='coerce')` garantindo a correta aplicação das operações aritméticas.
3. **Isolamento de Ausências Críticas:** Foram limpas via `dropna()` apenas as linhas que possuíam valores nulos nas colunas fundamentais mapeadas para as 5 perguntas de pesquisa, mantendo a integridade biológica do perfil da amostra sem imputações artificiais (como médias ou medianas arbitrárias) que distorceriam a realidade clínica.
4. **Sanitização de Escores de Estadiamento:** Os estágios clínicos foram limpos e formatados como texto puro para evitar falhas de ordenação ou ruídos visuais (`.0`) na plotagem dos eixos gráficos.

---

## 📊 Stack de Tecnologias e Visualizações Estatísticas

O projeto foi construído utilizando as seguintes bibliotecas fundamentais do ecossistema de Data Science do Python:
* **Pandas:** Ingestão de dados, engenharia de atributos (conversão de dias para anos) e estatística descritiva (Média, Mediana, Desvio Padrão).
* **Matplotlib & Seaborn:** Criação de gráficos estáticos de alto padrão visual, adequados para relatórios acadêmicos.
  * *Histogramas com KDE (Kernel Density Estimation)* para distribuição demográfica.
  * *Boxplots e Violin Plots* para distribuições de idade por estágio e correlações de espalhamento linfonodal.
  * *Count plots e Bar plots agrupados (hue)* para mapear a distribuição dos subtipos moleculares e taxas de resposta ao tratamento.

---

## 🚀 Como Executar o Projeto

1. Certifique-se de ter o **Python 3.12+** instalado em sua máquina.
2. Clone este repositório para o seu ambiente local.
3. Certifique-se de que o arquivo `Clinical_and_Other_Features.csv` está localizado exatamente dentro da pasta `./Dataset/`.
4. Instale as dependências necessárias executando no terminal:
   `pip install pandas matplotlib seaborn`
5. Abra o seu ambiente de preferência (VS Code, JupyterLab, Google Colab ou similares) e execute o arquivo `notebook.ipynb` sequencialmente da primeira à última célula.