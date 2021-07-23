"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const model_1 = require("../model/model");
class Service {
    createUser(id, nom, prenom) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new model_1.Model(id, nom, prenom);
            console.log(model);
            const response = yield node_fetch_1.default("https://c1.cleverapps.io/collegues", {
                method: "post",
                body: JSON.stringify(model),
                headers: { "Content-Type": "application/json" }
            });
            const data = yield response.json();
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield node_fetch_1.default("https://c1.cleverapps.io/collegues");
            const data = yield response.json();
            return data;
        });
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map