# 📰 The Article  
### Plataforma de Artigos com Comentários • Vue + Node + JSON

![status](https://img.shields.io/badge/status-active-success)
![license](https://img.shields.io/badge/license-MIT-blue)
![node](https://img.shields.io/badge/Node.js-18+-green)
![vue](https://img.shields.io/badge/Vue-2.x-brightgreen)
![tech](https://img.shields.io/badge/stack-Vue_%2B_Node_%2B_JSON-black)

---

## 📌 Sobre o Projeto

**The Article** é uma plataforma simples e funcional para leitura de artigos, escrita de comentários e interação com conteúdo.  
Criada com **Vue no frontend**, **Node + Express no backend** e **JSON como banco de dados**, a aplicação serve como estudo para:

- APIs REST simples  
- Organização de componentes Vue  
- Comunicação via Axios  
- CRUD básico  
- Persistência com JSON  

Apesar de simples, o projeto demonstra habilidades reais de desenvolvimento frontend + backend.

---

## 🚀 Funcionalidades

### 📝 Artigos
- Listagem de artigos  
- Página de artigo individual  
- Seção "Sobre o projeto"  
- Sistema de likes  
- Prevenção: 1 curtida por pessoa (via `localStorage`)  

### 💬 Comentários
- Adicionar novos comentários  
- Editar comentário  
- Deletar comentário  
- Exibição instantânea no front (sem reload)  

### 🔒 Proteção via Front-End
Antes de editar ou deletar um comentário, o sistema exige uma **senha definida no front-end**.

> ⚠ É apenas uma proteção visual — não é uma autenticação real.

### ❤️ Curtidas
- Várias pessoas podem curtir  
- Cada dispositivo só pode curtir uma vez  
- Controle via `localStorage`  

---

## 🛠 Tecnologias Utilizadas

### **Frontend**
- Vue.js 2.x  
- Axios  
- HTML / CSS  
- Bootstrap (opcional)

### **Backend**
- Node.js  
- Express  
- File System (`fs`)  
- JSON como banco de dados  

---

## 📁 Estrutura do Projeto

