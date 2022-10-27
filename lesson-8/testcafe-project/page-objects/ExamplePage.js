import {Selector, t} from 'testcafe'

export class ExamplePage {
    pageElements = {
        checkboxSelector: '[data-testid="remote-testing-checkbox"]'
    }

    checkboxSelector = Selector(this.pageElements.checkboxSelector);

    isCheckboxChecked = async () => this.checkboxSelector.checked;

    clickCheckbox = async () => {
        await t.click(this.checkboxSelector)
    }
}
