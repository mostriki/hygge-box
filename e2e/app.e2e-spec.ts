import { HyggeboxPage } from './app.po';

describe('hyggebox App', () => {
  let page: HyggeboxPage;

  beforeEach(() => {
    page = new HyggeboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
