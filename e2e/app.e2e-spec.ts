import { Angular4CourseProjectPage } from './app.po';

describe('angular4-course-project App', () => {
  let page: Angular4CourseProjectPage;

  beforeEach(() => {
    page = new Angular4CourseProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
