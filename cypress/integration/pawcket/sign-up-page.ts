describe("Visit sign up page and check content", () => {
    context("Successfully Loads",() =>{
        before(() =>{
            cy.visit("/sign-up")
        })
        beforeEach(() =>{
            cy.waitForReact()
        })

        it("Should load logo and title", () => {
            cy.get("svg")
            cy.get("h1").contains("Pawcket")
        })

        it("Should load a form", () => {
            cy.react("SignUpForm")
            cy.react("FormInputs", {props:{placeholder: "Email"}})
            cy.react("FormInputs", {props:{placeholder: "Password"}})
            cy.get("button").should("have.id", "auth-btn")
              .should("contain", "Sign Up")
              //.react("FormInputs", {props:{placeholder: "ConfirmPassword"}})
              //.type("tester@test.com")
              //.type("{enter}")
              //.should("have.value", "tester@test.com")
        })
    })
  })

describe("Breakpoints", () => {
    context("Mobile", () => {
        before(() =>{
            cy.visit("/sign-up")})
      beforeEach(() => {
        cy.viewport(414, 896)
        cy.waitForReact()})

        it("Should load logo and title", () => {
            cy.get("svg")
            cy.get("h1").contains("Pawcket")
        })

        it("Should load a form", () => {
            cy.react("SignUpForm")
            cy.react("FormInputs", {props:{placeholder: "Email"}})
            cy.react("FormInputs", {props:{placeholder: "Password"}})
            cy.get("button").should("have.id", "auth-btn")
              .should("contain", "Sign Up")
              //.react("FormInputs", {props:{placeholder: "ConfirmPassword"}})
              //.type("tester@test.com")
              //.type("{enter}")
              //.should("have.value", "tester@test.com")
        })
    })
})