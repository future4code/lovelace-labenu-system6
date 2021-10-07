LAB_SYSTEMS

ESTRUTURA DE DADOS

    .Estudantes
    - id
    - nome
    - email
    - data de nascimento
    - principais hobbies

    .Docentes
    - id
    - nome 
    - email
    - data de nascimento
    - todas as suas especialidades

    .Turma
    - id
    - nome 
    - data de início
    - data de término 
    - lista de professores responsáveis
    - uma lista de alunos e módulo atual em que a turma está.


    ENDPOINTS

    → Criar estudante
        - Método: PUT
        - Path: /studant
        - Body:
            . id
            . nome 
            . email
            . data de nascimento
            . hobbies

    → Criar docente:
        - Método: PUT
        - Path: /teacher
        - Body:
            . id
            . nome 
            . email
            . data de nascimento
            . especialidades

    → Criar turma:
        - Método: PUT
        - Path: /cohort
        - Body:
            . id
            . nome 
            . data de início
            . data de término 
            . lista de professores responsáveis
            . lista de alunos e módulo atual 

    → Adicionar estudante na turma;
        - Método: PUT
        - Path: /studant/:id
        - Body:
            . id
            . nome 
            . data de início
            . data de término 
            . lista de professores responsáveis
            . lista de alunos e módulo atual 

    → Adicionar docente na turma:
        - Método: PUT
        - Path: /teacher/:id
        - Body:
            . id
            . nome 
            . email
            . data de nascimento
            . especialidades

    → Pegar a idade de algum estudante a partir do id:
        - Método: GET
        - Path: /studant/:id
        - Body de resposta: (Retornar um erro se não encontrar)  
            .id 