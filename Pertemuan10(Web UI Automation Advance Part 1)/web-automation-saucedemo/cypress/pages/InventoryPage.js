class InventoryPage {
  validateInventoryPage() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  }

  sortAZ() {
    cy.get('.product_sort_container').select('Name (A to Z)')
  }

  validateSortedAZ() {
    let productNames = []

    cy.get('.inventory_item_name')
      .each(($el) => {
        productNames.push($el.text())
      })
      .then(() => {
        const sortedNames = [...productNames].sort()
        expect(productNames).to.deep.equal(sortedNames)
      })
  }
}

export default new InventoryPage()
