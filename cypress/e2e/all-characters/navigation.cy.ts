import {
  interceptAllCharacters,
  interceptCharacter,
  interceptStaff,
  interceptStudents,
} from "./interceptors";

describe("Naviogation", () => {
  beforeEach(() => {
    interceptAllCharacters();
    interceptStudents();
    interceptStaff();
    interceptCharacter("9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8");
  });

  it("should navigate on all pages", () => {
    // Visit the home page
    cy.visit("/");

    cy.get('[data-testid="characters-page"]').should("be.visible");

    // Go to details page
    cy.get('[data-testid="character-card-Harry Potter"]')
      .should("be.visible")
      .click();

    cy.get('[data-testid="character-details-page-content"]').should(
      "be.visible"
    );

    // Students page
    cy.get('[data-testid="nav-menu-trigger"]').click();

    cy.get('[data-testid="menu-item-Students"]').click();

    cy.get('[data-testid="students-page-content"]').should("be.visible");

    // Staff page
    cy.get('[data-testid="nav-menu-trigger"]').click({ force: true });

    cy.get('[data-testid="menu-item-Staff"]').click();

    cy.get('[data-testid="staff-page-content"]').should("be.visible");
  });
});
