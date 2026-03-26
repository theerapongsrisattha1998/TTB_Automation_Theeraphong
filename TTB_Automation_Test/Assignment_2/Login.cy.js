// Automation Test By Cypress

describe('Create automation script to test website ‘http://the-internet.herokuapp.com/login’ ', () => {

  const username_Field = "#username"
  const password_Field = "#password"
  const login_Btn = 'button[type="submit"]'
  const dialog_Notice = "#flash"
  const logout_Btn = ".button.secondary.radius"

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/login')
  })

  it('Login success', () => {

    cy.get(username_Field)
      .should('be.visible')
      .type("tomsmith")

    cy.get(password_Field)
      .should('be.visible')
      .type("SuperSecretPassword!")

    cy.get(login_Btn)
      .should('be.visible')
      .click()

    cy.get(dialog_Notice)
      .should('be.visible')
      .contains('You logged into a secure area!')

    cy.wait(2000)

    cy.get(logout_Btn)
      .should('be.visible')
      .contains('Logout')
      .click()

    cy.get(dialog_Notice)
      .should('be.visible')
      .contains('You logged out of the secure area!')

    cy.wait(2000)
  })

  it('Login failed -  Password incorrect', () => {

    cy.get(username_Field)
      .should('be.visible')
      .type("tomsmith")

    cy.get(password_Field)
      .should('be.visible')
      .type("Password!")

    cy.get(login_Btn)
      .should('be.visible')
      .click()

    cy.get(dialog_Notice)
      .should('be.visible')
      .contains('Your password is invalid!')
    
    cy.wait(2000)

  })

  it('Login failed -  username not found', () => {

    cy.get(username_Field)
      .should('be.visible')
      .type("tomholland")

    cy.get(password_Field)
      .should('be.visible')
      .type("Password!")

    cy.get(login_Btn)
      .should('be.visible')
      .click()

    cy.get(dialog_Notice)
      .should('be.visible')
      .contains('Your username is invalid!')

    cy.wait(2000)

  })

})