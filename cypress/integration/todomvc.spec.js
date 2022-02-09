describe('Vue TodoMVC', () => {
  const selectors = {
    main: '.main',
    footer: '.footer',
    newTodo: '.new-todo',
    todoItems: '.todo-list li',
  };

  beforeEach(() => {
    cy.visit('/');
  });

  context('When page is initially opened', () => {
    it('should focus on the todo input field', () => {
      cy.focused().should('have.class', selectors.newTodo.slice(1));
    });
  });

  context('No Todos', function () {
    it('starts with nothing', () => {
      cy.get(selectors.todoItems).should('have.length', 0);
    });

    it('should hide main section and footer toolbar', function () {
      cy.get(selectors.main).should('not.exist');
      cy.get(selectors.footer).should('not.exist');
    });
  });
});
