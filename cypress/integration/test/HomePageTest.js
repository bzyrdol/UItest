describe ('cpress test', () => {
    it('Go to home page', () => {
        cy.visit('http://addressenrichment.azurewebsites.net/Login')
        cy.contains('Home').click()
    })
    it('Enter valid address data', () => {
        cy.get('textArea').type("Scaleworks Inc, 118 Broadway Suite 627 San Antonio, TX 78205")
        cy.get('#submitText').click()
        cy.get('table').contains('td', "118 Broadway Suite 627 San Antonio, TX 78205")
        cy.get('table').contains('td', "Recipient: Scaleworks, Inc")
    })
    it ('show meta details', () => {
        cy.contains('Show meta details').click()
        cy.get('#address-0').contains("delivery_point")
    })
    it ('Enter empty address data', () => {
        cy.get('textArea').clear()
        cy.get('#submitText').click()
        cy.get('#results').contains("Incorrect data")
    })
})