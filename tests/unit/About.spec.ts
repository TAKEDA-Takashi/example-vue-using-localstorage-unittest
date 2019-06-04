/* tslint:disable:no-unused-expression */

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('render 1 with first access', () => {
    const wrapper = shallowMount(About);
    const p = wrapper.find('p');

    expect(p.is('p')).to.be.true;
    expect(p.text()).to.equal('1');
  });

  it('render same count with some access', () => {
    let wrapper = shallowMount(About);
    wrapper = shallowMount(About);
    wrapper = shallowMount(About);
    const p = wrapper.find('p');

    expect(p.is('p')).to.be.true;
    expect(p.text()).to.equal('3');
  });
});
