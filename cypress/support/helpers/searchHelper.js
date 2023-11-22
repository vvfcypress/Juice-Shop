export function findProduct(productName) {
  cy.get('body').then(list => {
    if (list.find(`[alt = "${productName}"]`).length > 0) {
      cy.get(`[alt="${productName}"]`)
      .parents('.mat-grid-tile-content')
      .find('[aria-label="Add to Basket"]').click({ force: true });         
    } else {
      cy.get('[aria-label="Next page"]').click({ force: true });
      findProduct(productName);
    }
  })
}
