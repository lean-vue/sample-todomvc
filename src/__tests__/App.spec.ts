import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import App from '../App.vue';

describe('App', () => {
  test('renders todos title', () => {
    const wrapper = mount(App);
    expect(wrapper.find('h1').text()).toContain('todos');
  });
});
