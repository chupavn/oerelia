import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.feature(PLATFORM.moduleName('oerelia/testplugin/elements/index'));
}
