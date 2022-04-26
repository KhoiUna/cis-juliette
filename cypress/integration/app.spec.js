/// <reference types="cypress" />

describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/good-ui");
  });

  it("test dropdown", () => {
    const year = 2019;
    cy.get("#admission-year").type(`${year}{enter}`);
    cy.get("#year option").should(
      "have.length",
      new Date().getFullYear() - year + 1
    );
  });
});
