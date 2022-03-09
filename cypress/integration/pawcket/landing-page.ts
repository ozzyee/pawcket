export const URL = "http://localhost:3000"

describe("Visit landing page and check content", () => {
    it("Successfully loads", () => {
      cy.visit(URL)

      cy.get("svg")
      cy.get("h1").contains("Pawcket")
      cy.get("button").should((btns) => {
        expect(btns).to.have.length(2);
        expect(btns[0]).to.contain("Log in");
        expect(btns[1]).to.contain("Sign up");
      })
    });
  })

describe("Check buttons link",() => {
    it("Redirect to the right URL on click", () => {
        
        cy.get("button").contains("Log in").click();
        cy.url().should("include", "/login")
        cy.visit(URL)
        cy.get("button").contains("Sign up").click();
        cy.url().should("include", "/sign-up")
        cy.visit(URL)
    })
})

describe("Breakpoints", () => {
    context("Mobile", () => {
      beforeEach(() => {
        cy.viewport(414, 896)
        cy.visit(URL)})
  
      it("Successfully loads", () => {
        cy.get("svg")
        cy.get("h1").contains("Pawcket")
        cy.get("button").should((btns) => {
          expect(btns).to.have.length(2);
          expect(btns[0]).to.contain("Log in");
          expect(btns[1]).to.contain("Sign up");})
        })

        it("Redirect to the right URL on click", () => {
        
            cy.get("button").contains("Log in").click();
            cy.url().should("include", "/login")
            cy.visit(URL)
            cy.get("button").contains("Sign up").click();
            cy.url().should("include", "/sign-up")
            cy.visit(URL)
        })

    })
})
