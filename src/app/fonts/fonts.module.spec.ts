import { FontsModule } from './fonts.module';

describe('FontsModule', () => {
  let fontsModule: FontsModule;

  beforeEach(() => {
    fontsModule = new FontsModule();
  });

  it('should create an instance', () => {
    expect(fontsModule).toBeTruthy();
  });
});
