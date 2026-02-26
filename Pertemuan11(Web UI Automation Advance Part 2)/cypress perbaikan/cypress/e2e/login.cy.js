import LoginActions from '../pages/login/login.actions'
import InventoryActions from '../pages/inventory/inventory.actions'

describe('Login Test - SauceDemo', () => {

  const login = new LoginActions()
  const inventory = new InventoryActions()

  beforeEach(() => {
    login.visitLoginPage()
  })

  // ===============================
  // POSITIVE TEST
  // ===============================
  it('Positive - Login with valid credentials', () => {

    login.login('standard_user', 'secret_sauce')

    // Assertion
    inventory.verifyInventoryVisible()

    // Visual Regression
    cy.matchImageSnapshot('positive-login')
  })


  // ===============================
  // NEGATIVE TEST
  // ===============================

  it('Negative - Invalid Username', () => {

    login.login('invalid_user', 'secret_sauce')

    login.selector.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    cy.matchImageSnapshot('invalid-username')
  })


  it('Negative - Wrong Password', () => {

    login.login('standard_user', 'wrong_password')

    login.selector.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    cy.matchImageSnapshot('wrong-password')
  })


  it('Negative - Locked Out User', () => {

    login.login('locked_out_user', 'secret_sauce')

    login.selector.errorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')

    cy.matchImageSnapshot('locked-user')
  })

})