import { ThemeAdminPage } from './app.po';

describe('theme-admin App', () => {
  let page: ThemeAdminPage;

  beforeEach(() => {
    page = new ThemeAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
