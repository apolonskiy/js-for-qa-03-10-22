import {t, Selector} from 'testcafe';
import { ExamplePage } from '../page-objects/ExamplePage';

const examplePage = new ExamplePage();
const sliderCheckbox = Selector('[data-testid="tried-testcafe-checkbox"]')

fixture('First test fixture')
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async () => {
        await t.maximizeWindow();
    })

test.only('Test checkboxes', async () => {
    await t.expect(await examplePage.isCheckboxChecked()).notOk('Failed before check');
    await examplePage.clickCheckbox()
    await t.expect(await examplePage.isCheckboxChecked()).ok('Failed after check');
})

test.meta({testAuthor: 'Dev'})('Slider test', async () => {
    await t.click(sliderCheckbox);
    const selectorSlider = Selector('[id="slider"]');
    const sliderWidth = parseInt(await selectorSlider.clientWidth);
    await t.click(selectorSlider, {offsetX: Math.floor(sliderWidth / 9 * 3)})
    await t.expect(selectorSlider.find('span').getAttribute('style')).eql('left: 33.3333%;')
})


test.meta({testAuthor: 'Dev'})('Verify select options', async () => {
    const getSelectedText = async (
        element,
        subSelector = 'option'
      ) => {
        const selectedSelector = await Selector(element)
          .find(subSelector)
          .filter(node => node?.selected)
          .nth(0);
        const text = (await selectedSelector.textContent).trim();
        return text;
      }

      const expectedOption = 'Both'

      await t.click(Selector('[data-testid="preferred-interface-select"]'))
            .click(Selector('option').withExactText(expectedOption));
    await t.expect(await getSelectedText('[data-testid="preferred-interface-select"]')).eql(expectedOption);
    
})