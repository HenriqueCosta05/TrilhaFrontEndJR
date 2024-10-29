import { WrapperComponent } from "..";

describe("WrapperComponent", () => {
    it("renders", () => {
        cy.mount(
            <WrapperComponent>
                <h1>Test</h1>
            </WrapperComponent>
        );
        const wrapperRoot = cy.get('[data-test-id="wrapper_root"]');
        wrapperRoot.should("exist");
    });

    it("should render its children and correctly implement tailwind classes", () => {
        cy.mount(
            <WrapperComponent>
                <h1 className="text-7xl">Children Element</h1>
            </WrapperComponent>
        )
        const wrapper = cy.get('[data-test-id="wrapper_root"]');
        const wrapperChildren = wrapper.get("h1");
        wrapper.should("have.text", "Children Element");
        wrapperChildren.should("have.class", "text-7xl");
    })

    it("should bind tailwind classes via props", () => {
        cy.mount(
            <WrapperComponent className="bg-red-500">
                <h1>Test</h1>
            </WrapperComponent>
        )
        const wrapper = cy.get('[data-test-id="wrapper_root"]');
        wrapper.should("have.class", "bg-red-500");
    })
    
})