/* eslint-disable no-unused-vars */

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Base Class for all persistence implementations.
 * All Methods are asnychronous to resemble real world scenarios.
 */
class Persistence {
  /**
   * @returns {Promise<Todo[]>}
   */
  getAll() {
    throw Error('Not implemented');
  }
  /**
   * @param {string} title
   * @returns {Promise<Todo>}
   */
  create(title) {
    throw Error('Not implemented');
  }
  /**
   * @param {number} id
   * @param {Partial<Omit<Todo, 'id'>>} changes
   * @returns {Promise<Todo>}
   */
  update(id, changes) {
    throw Error('Not implemented');
  }
  /**
   * @param {number} id
   * @returns {Promise<void>}
   */
  destroy(id) {
    throw Error('Not implemented');
  }
}

export default Persistence;
