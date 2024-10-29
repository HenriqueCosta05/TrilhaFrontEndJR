import NavbarComponent from "./navbar";

describe("NavbarComponent", () => {
    it("renders", () => {
        cy.mount(<NavbarComponent />);
        const navbarRoot = cy.get('[data-test-id="navbar_root"]');
        navbarRoot.should("exist");
    });

    it('should have links in mobile view', () => {
        cy.viewport("iphone-xr");
        cy.mount(<NavbarComponent />);
        const menuButton = cy.get('[data-test-id="navbar_toggle"]');
        menuButton.click();
        const mobileNavbar = cy.get('[data-test-id="mobile_navbar"]');
        mobileNavbar.should("exist");
    });

    it('should have links in desktop view', () => {
        cy.viewport("macbook-15");
        cy.mount(<NavbarComponent />);
        const links = cy.get('[data-test-id="desktop_navbar"] a');
        links.should("have.length", 4);
    })
})