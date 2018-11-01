import { GithubSearchModule } from './github-search.module';

describe('GithubSearchModule', () => {
  let githubSearchModule: GithubSearchModule;

  beforeEach(() => {
    githubSearchModule = new GithubSearchModule();
  });

  it('should create an instance', () => {
    expect(githubSearchModule).toBeTruthy();
  });
});
