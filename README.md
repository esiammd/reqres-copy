# requisitos:
1. ter docker intalado e executando

# depois de abrir o projeto
1. Preencher o arquivo .env fazendo uma cópia do arquivo .env.example
2. Levantar database: docker compose up -d





# ANOTAÇÕES
- Tabelas departments, positions e skills apenas users ADMIN podem modificar
- Tabela users pode ser modificada por ADMIN e USER


# TAREFA
- Testes
- Mover dados da conexao do banco para um arquivo .en? - app.modules e docker-compose?
*- Repensar no desenho do projeto
*- Cambiar Duacode por Employee
*- Cambiar Register por seed
- Recuperar contrasenhas

// export enum UserRole {
//   ADMIN = 'admin',
//   EMPLOYEE = 'employee',
// }

// user (el que hace login)
// employee
