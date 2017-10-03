import { CurrriculoAngularPage } from './app.po';

describe('currriculo-angular App', () => {
  let page: CurrriculoAngularPage;

  beforeEach(() => {
    page = new CurrriculoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
