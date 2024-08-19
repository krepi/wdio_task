import os from 'os';

const isMac = os.platform() === 'darwin';
const isWindows = os.platform() === 'win32';
const isLinux = os.platform() === 'linux';

const selectAllShortcut = isMac ? ['Command', 'a'] : ['Control', 'a'];

export default {
    isMac,
    isWindows,
    isLinux,
    selectAllShortcut
};
