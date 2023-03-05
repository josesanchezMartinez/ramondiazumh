"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
// Initialization
const app = (0, express_1.default)();
// Settings
app.set('port', process.env.PORT || 4000);
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
// Routes
app.use('/api', index_1.default);
// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on por', app.get('port'));
});
