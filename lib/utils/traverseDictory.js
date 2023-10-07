"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseDirectory = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
async function traverseDirectory(directory, fileCallback, parentFolderName = '') {
    try {
        const files = await promises_1.default.readdir(directory);
        for (const file of files) {
            const filePath = path_1.default.join(directory, file);
            const stat = await promises_1.default.stat(filePath);
            if (stat.isDirectory()) {
                await traverseDirectory(filePath, fileCallback, path_1.default.join(parentFolderName, file));
            }
            else {
                fileCallback(filePath, parentFolderName);
            }
        }
    }
    catch (error) {
        console.error(`Error while traversing directory ${directory}:`, error);
    }
}
exports.traverseDirectory = traverseDirectory;
//# sourceMappingURL=traverseDictory.js.map