import LoginSelectors from './login.selectors'

class LoginActions {
  constructor() {
    this.selector = new LoginSelectors()
  }

  visitLoginPage() {
    cy.visit('/')
  }

  inputUsername(username) {
    this.selector.usernameInput().clear().type(username)
  }

  inputPassword(password) {
    this.selector.passwordInput().clear().type(password)
  }

  clickLogin() {
    this.selector.loginButton().click()
  }

  login(username, password) {
    this.inputUsername(username)
    this.inputPassword(password)
    this.clickLogin()
  }
}

export default LoginActions