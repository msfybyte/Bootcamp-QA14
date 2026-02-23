describe('Saucedemo Automation', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login sukses dengan user valid', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Assertion sukses login
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Urutkan produk dari A ke Z', () => {
    // Login dulu
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    
    // Sort A-Z
    cy.get('.product_sort_container').select('Name (A to Z)')
    
    // Ambil nama produk & cek urutan
    let productNames = []
    
    cy.get('.inventory_item_name').each(($el) => {
      productNames.push($el.text())
    }).then(() => {
      const sortedNames = [...productNames].sort()
      expect(productNames).to.deep.equal(sortedNames)
    })
  })

})
