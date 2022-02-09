describe('Vue TodoMVC', () => {
  const todoFixtures = [
    'Unit Testing',
    'E2E Testing',
    'Test Coverage',
    'Continous Integration',
  ];

  const selectors = {
    main: '.main',
    footer: '.footer',
    newTodo: '.new-todo',
    todoItems: '.todo-list li',
    toggleAll: '.toggle-all',
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

  context('New Todo', () => {
    it('should allow me to add todo items', () => {
      cy.get(selectors.newTodo).type(`${todoFixtures[0]}{enter}`);
      cy.get(selectors.todoItems).first().contains('label', todoFixtures[0]);
      cy.get(selectors.newTodo).type(`${todoFixtures[1]}{enter}`);
      cy.get(selectors.todoItems).last().contains('label', todoFixtures[1]);
      cy.get(selectors.todoItems).should('have.length', 2);
    });

    it('should clear text input field when an item is added', () => {
      cy.createTodo(todoFixtures[0]);
      cy.get(selectors.newTodo).should('have.value', '');
    });

    it('should trim text input', () => {
      cy.createTodo(`    ${todoFixtures[0]}    `);
      cy.get(selectors.todoItems)
        .first()
        .find('label')
        .should('have.text', todoFixtures[0]);
    });

    it('should not allow me to enter empty todos', () => {
      cy.get(selectors.newTodo).type('{enter}');
      cy.get(selectors.newTodo).type('   {enter}');
      cy.get(selectors.todoItems).should('have.length', 0);
    });

    it('should show main section and footer toolbar when items added', () => {
      cy.createTodo(todoFixtures[0]);
      cy.get(selectors.main).should('be.visible');
      cy.get(selectors.footer).should('be.visible');
    });

    it('should persist added items', () => {
      cy.createTodo(todoFixtures[0]);
      cy.createTodo(todoFixtures[1]);
      cy.createTodo(todoFixtures[2]);
      cy.get(selectors.todoItems).should('have.length', 3);
      cy.reload();
      cy.get(selectors.todoItems).should('have.length', 3);
    });
  });

  context('Mark all as completed', () => {
    beforeEach(() => {
      cy.createTodo(todoFixtures[0]);
      cy.createTodo(todoFixtures[1]);
      cy.createTodo(todoFixtures[2]);
      cy.get(selectors.todoItems).as('todos');
    });

    it('should allow me to mark all items as completed', () => {
      cy.get(selectors.toggleAll).check();

      cy.get('@todos').eq(0).should('have.class', 'completed');
      cy.get('@todos').eq(1).should('have.class', 'completed');
      cy.get('@todos').eq(2).should('have.class', 'completed');
    });

    it('should allow me to clear the complete state of all items', () => {
      cy.get(selectors.toggleAll).check();
      cy.get(selectors.toggleAll).uncheck();

      cy.get('@todos').eq(0).should('not.have.class', 'completed');
      cy.get('@todos').eq(1).should('not.have.class', 'completed');
      cy.get('@todos').eq(2).should('not.have.class', 'completed');
    });

    it('complete all checkbox should update state when items are completed / cleared', function () {
      cy.get(selectors.toggleAll).should('not.be.checked');

      cy.get(selectors.toggleAll).check();
      cy.get(selectors.toggleAll).should('be.checked');

      cy.get(selectors.todoItems)
        .first()
        .as('firstTodo')
        .find('.toggle')
        .uncheck();
      cy.get(selectors.toggleAll).should('not.be.checked');

      cy.get('@firstTodo').find('.toggle').check();
      cy.get(selectors.toggleAll).should('be.checked');
    });

    it('should persist completed state of items this way', () => {
      cy.get(selectors.toggleAll).check();
      cy.reload();
      cy.get(selectors.toggleAll).should('be.checked');
      cy.get(selectors.todoItems).should('have.length', 3);
    });
  });
});
