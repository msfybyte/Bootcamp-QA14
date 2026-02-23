import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Saucedemo Automation - Session 9 Improved', () => {

  // Hook: jalan sebelum tiap test
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('standard_user', 'secret_sauce')
    InventoryPage.validateInventoryPage()
  })

  // Hook: jalan setelah tiap test
  afterEach(() => {
    cy.screenshot()
  })

  it('Berhasil login ke halaman inventory', () => {
    cy.get('.inventory_list').should('be.visible')
  })

  it('Mengurutkan produk dari A ke Z', () => {
    InventoryPage.sortAZ()
    InventoryPage.validateSortedAZ()
  })

})
