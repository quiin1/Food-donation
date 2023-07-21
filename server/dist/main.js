"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const PORT = parseInt(process.env.PORT, 10) || 5000;
    await app.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map