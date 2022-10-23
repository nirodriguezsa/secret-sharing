"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const welcome_1 = require("./welcome");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    logger.log(`Running in port ${process.env.PORT}`);
    (0, welcome_1.welcome)();
}
bootstrap();
//# sourceMappingURL=main.js.map