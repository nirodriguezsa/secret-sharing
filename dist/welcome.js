"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
function welcome() {
    console.log('\x1b[36m', `
    ███╗░░██╗██████╗░░██████╗
    ████╗░██║██╔══██╗██╔════╝
    ██╔██╗██║██████╔╝╚█████╗░
    ██║╚████║██╔══██╗░╚═══██╗
    ██║░╚███║██║░░██║██████╔╝
    ╚═╝░░╚══╝╚═╝░░╚═╝╚═════╝░
      Welcome to ${process.env.X_APPLICATION_ID}`, '\x1b[0m');
}
exports.welcome = welcome;
//# sourceMappingURL=welcome.js.map