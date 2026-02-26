import InventorySelectors from './inventory.selectors'

class InventoryActions {
  constructor() {
    this.selector = new InventorySelectors()
  }

  verifyInventoryVisible() {
    this.selector.inventoryContainer().should('be.visible')
  }
}

export default InventoryActions