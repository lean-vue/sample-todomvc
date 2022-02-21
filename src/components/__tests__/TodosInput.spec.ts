import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import TodosInput from '@/components/TodosInput.vue';

describe('TodosInput', () => {
  test('should trigger create event on entering new todo', async () => {
    const wrapper = mount(TodosInput);

    const input = wrapper.find('input');

    await input.setValue('Unit Testing');
    await input.trigger('keyup.enter');

    expect(wrapper.emitted()).toHaveProperty('create');
  });

  test('should submit title payload in create event', async () => {
    const wrapper = mount(TodosInput);

    const input = wrapper.find('input');

    await input.setValue('Unit Testing');
    await input.trigger('keyup.enter');

    const createEvent = wrapper.emitted('create')!;
    expect(createEvent[0]).toEqual(['Unit Testing']);
  });

  test('should trim the entered title', async () => {
    const wrapper = mount(TodosInput);

    const input = wrapper.find('input');

    await input.setValue('  Unit Testing  ');
    await input.trigger('keyup.enter');

    const createEvent = wrapper.emitted('create')!;
    expect(createEvent[0]).toEqual(['Unit Testing']);
  });

  test('should not trigger event on empty or space only titles', async () => {
    const wrapper = mount(TodosInput);

    const input = wrapper.find('input');

    await input.setValue('');
    await input.trigger('keyup.enter');
    await input.setValue('    ');
    await input.trigger('keyup.enter');

    const createEvent = wrapper.emitted('create');
    expect(createEvent).not.toBeDefined();
  });

  test('should clear input field after entering title', async () => {
    const wrapper = mount(TodosInput);

    const input = wrapper.find('input');

    await input.setValue('Unit Testing');
    await input.trigger('keyup.enter');

    const fldValue = input.element.value;
    expect(fldValue.length).toBe(0);
  });
});
