flowchart TB
    %% Pessoas (atores)
    A["👤 Aluno
    (Aluno da instituição, com matrícula ativa)"]
    B["👤 Professor
    (Professor da instituição, com vínculo ativo)"]

    %% Sistemas internos
    subgraph SI ["Sistema de Avaliação"]
        AA["🖥 Interface de Avaliação
        (Permite avaliar docentes e consultar avaliações)"]
        DB[(🗄 Database Armazena feedbacks)]
    end

    %% Relações
    A -->|Avalia docentes e consulta avaliações| AA
    B -->|Consulta avaliações recebidas| AA
    AA -->|Armazena e recupera feedback| DB
    <img width="3782" height="3840" alt="Untitled diagram _ Mermaid Chart-2025-09-22-165159" src="https://github.com/user-attachments/assets/4793cf60-7ee7-4425-b5a8-e8a374f11fbb" />

