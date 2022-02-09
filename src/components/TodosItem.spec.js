import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import TodosItem from '@/components/TodosItem.vue';

const todoMock = { id: 14, title: 'Unit Testing', completed: false };

describe('TodosItem rendering todo items', () => {
  test('displays todo title', () => {
    const wrapper = mount(TodosItem, { props: { todo: todoMock } });
    expect(wrapper.text()).toContain(todoMock.title);
  });

  test('removes or sets completed class on li', async () => {
    const wrapper = mount(TodosItem, { props: { todo: todoMock } });
    expect(wrapper.find('li').classes()).not.toContain('completed');
    todoMock.completed = true;
    await wrapper.setProps({ todo: todoMock });
    expect(wrapper.find('li').classes()).not.toContain('completed');
  });
});
