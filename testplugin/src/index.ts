import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.feature(PLATFORM.moduleName('./elements/index'));
}
