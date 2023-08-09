describe("demoqa", () => {

    it("Forms", () => {

        cy.visit("https://demoqa.com/");
        
        cy.contains("Widgets").click();
    });
});