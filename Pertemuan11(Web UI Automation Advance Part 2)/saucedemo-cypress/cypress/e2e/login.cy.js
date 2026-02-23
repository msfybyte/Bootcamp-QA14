import LoginPage from '../pages/LoginPage'

describe('Saucedemo Login Automation - POM + Visual Regression', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  // ==============================
  // ✅ POSITIVE TEST
  // ==============================

  it('Positive - Login with valid credentials', () => {

    LoginPage.login('standard_user', 'secret_sauce')

    // Assertion
    LoginPage.validateLoginSuccess()

    // Visual Regression
    cy.screenshot('positive-login-success')

  })


  // ==============================
  // ❌ NEGATIVE TEST
  // ==============================

  it('Negative - Invalid username', () => {

    LoginPage.login('invalid_user', 'secret_sauce')

    // Assertion
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    // Visual Regression
    cy.screenshot('negative-invalid-username')

  })


  it('Negative - Wrong password', () => {

    LoginPage.login('standard_user', 'wrong_password')

    // Assertion
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    // Visual Regression
    cy.screenshot('negative-wrong-password')

  })


  it('Negative - Locked out user', () => {

    LoginPage.login('locked_out_user', 'secret_sauce')

    // Assertion
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')

    // Visual Regression
    cy.screenshot('negative-locked-user')

  })

})
