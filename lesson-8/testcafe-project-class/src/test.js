import {Selector, t} from 'testcafe'

const testInput = Selector('fieldset').nth(0).find('input').nth(0)

const checkbox = Selector('[data-testid="remote-testing-checkbox"]')

const sliderCheckbox = Selector('[data-testid="tried-testcafe-checkbox"]')

const sliderDiv = Selector('div[id="slider"]')

const sliderSpan = sliderDiv.find('span');



fixture('My first TC tests')
.page('https://devexpress.github.io/testcafe/example/')

test('Type text into input and check if value changed', async () => {
    const expectedText = 'THIS IS NEW TEXT'
    await t.expect(testInput.value).eql('', 'Initial value of inoput is not empty')
    await t.typeText(testInput, expectedText);
    await t.expect(testInput.value).eql(expectedText, 'Change value of inoput is correct')
})

test.meta({author: 'QA'})('Click checkbox and make sure it worked', async () => {
 await t.expect(checkbox.checked).notOk('Checkbox is checked initially');
 await t.click(checkbox);
 await t.expect(checkbox.checked).ok('Checkbox is not checked after click');
})


test.meta({author: 'QA'})('Verify Slider drag test', async () => {
    await t.click(sliderCheckbox);
    await t.expect(sliderSpan.getAttribute('style')).eql('left: 0%;')
    console.log(await sliderDiv.getStyleProperty('width'))
    console.log((await sliderDiv.getStyleProperty('width')).split('.'))

    const sliderWidth = (await sliderDiv.getStyleProperty('width')).split('.')[0]
    await t.drag(sliderSpan, Math.floor(sliderWidth / 10 * 3), 0)
    await t.expect(sliderSpan.getAttribute('style')).eql('left: 33.3333%;')
   })


   test.only.meta({author: 'QA'})('Verify select options', async () => {
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