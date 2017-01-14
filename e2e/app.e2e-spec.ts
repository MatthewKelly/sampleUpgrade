import { SampleUpgradePage } from './app.po';

describe('sample-upgrade App', function() {
  let page: SampleUpgradePage;

  beforeEach(() => {
    page = new SampleUpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
