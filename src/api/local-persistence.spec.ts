import { beforeEach, describe, expect, test } from 'vitest';
import LocalPersistence from './local-persistence';
import Persistence from './persistence';

const mockTitle = 'Unit Teting';
const mockUpdatedTitle = 'Unit Testing';

describe('Local Persistence implementation', () => {
  let persistence: Persistence;
  let createdId = 0;

  beforeEach(() => {
    persistence = new LocalPersistence();
  });

  test('initially returns zero todos', async () => {
    const todos = await persistence.getAll();
    expect(todos.length).toBe(0);
  });

  test('can create a todo', async () => {
    const todo = await persistence.create(mockTitle);
    createdId = todo.id;
    expect(todo.title).toBe(mockTitle);
    expect(todo.completed).toBeFalsy();
  });

  test('can update a todo', async () => {
    const todo = await persistence.update(createdId, {
      title: mockUpdatedTitle,
      completed: true,
    });
    expect(todo.title).toBe(mockUpdatedTitle);
    expect(todo.completed).toBeTruthy();
  });

  test('can delete a todo', async () => {
    await persistence.destroy(createdId);
    const todos = await persistence.getAll();
    expect(todos.length).toBe(0);
  });

  test('creates unique ids', async () => {
    const { id: id1 } = await persistence.create('One');
    const { id: id2 } = await persistence.create('Two');
    expect(id1).not.toBe(id2);
  });
});
