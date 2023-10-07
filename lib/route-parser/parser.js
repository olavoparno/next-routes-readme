"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRouteHandlers = void 0;
const fs_1 = __importDefault(require("fs"));
const traverse_1 = __importDefault(require("@babel/traverse"));
const parser = __importStar(require("@babel/parser"));
const t = __importStar(require("@babel/types"));
const isHttpStatusValid_1 = require("../utils/isHttpStatusValid");
function parseRouteHandlers(routeFile) {
    const content = fs_1.default.readFileSync(routeFile, 'utf-8');
    const handlers = [];
    const dependencies = [];
    let currentHandler = null;
    const ast = parser.parse(content, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
    });
    (0, traverse_1.default)(ast, {
        enter(path) {
            var _a, _b;
            if (t.isImportDeclaration(path.node)) {
                dependencies.push(path.toString());
            }
            if (t.isFunctionDeclaration(path.node) && path.node.async) {
                const { name } = path.node.id;
                const params = path.node.params
                    .map(param => content.substring(param.start, param.end))
                    .join(', ');
                const returnType = path.node.returnType
                    ? content.substring(path.node.returnType.start, path.node.returnType.end)
                    : '';
                currentHandler = {
                    implementation: `async function ${name}(${params})${returnType}`,
                    name,
                    method: 'GET',
                    doc: {
                        variables: [],
                        conditionals: [],
                        errors: [],
                        comments: [],
                    },
                    dependencies,
                };
                if (path.node.leadingComments) {
                    path.node.leadingComments.forEach(comment => {
                        const value = content.substring(comment.start, comment.end);
                        currentHandler.doc.comments.push({ value, line: comment.loc.start.line });
                    });
                }
            }
            if (currentHandler) {
                const currentLineNumber = ((_a = path.node.loc) === null || _a === void 0 ? void 0 : _a.start.line) || 0;
                if (t.isVariableDeclaration(path.node)) {
                    const value = content.substring(path.node.start, path.node.end);
                    currentHandler.doc.variables.push({ value, line: currentLineNumber });
                }
                if (t.isIfStatement(path.node) || t.isConditionalExpression(path.node)) {
                    const value = content.substring(path.node.start, path.node.end);
                    currentHandler.doc.conditionals.push({ value, line: currentLineNumber });
                }
                if (t.isThrowStatement(path.node)) {
                    const value = content.substring(path.node.start, path.node.end);
                    currentHandler.doc.errors.push({ value, line: currentLineNumber });
                }
                if (t.isTryStatement(path.parent) &&
                    t.isCatchClause(path.parent.handler) &&
                    path.parent.handler === path.node) {
                    const value = content.substring(path.node.start, path.node.end);
                    const currentLineNumber = ((_b = path.node.loc) === null || _b === void 0 ? void 0 : _b.start.line) || 0;
                    currentHandler.doc.errors.push({ value, line: currentLineNumber });
                }
                if (t.isCallExpression(path.node) &&
                    t.isMemberExpression(path.node.callee) &&
                    t.isIdentifier(path.node.callee.object) &&
                    path.node.callee.object.name === 'Promise' &&
                    t.isIdentifier(path.node.callee.property) &&
                    path.node.callee.property.name === 'reject') {
                    const value = content.substring(path.node.start, path.node.end);
                    currentHandler.doc.errors.push({ value, line: currentLineNumber });
                }
                if (path.node.leadingComments) {
                    path.node.leadingComments.forEach(comment => {
                        const value = content.substring(comment.start, comment.end);
                        currentHandler.doc.comments.push({ value, line: comment.loc.start.line });
                    });
                }
                if (t.isCallExpression(path.node)) {
                    // Check if it's a NextResponse.json call
                    if (t.isMemberExpression(path.node.callee) &&
                        t.isIdentifier(path.node.callee.object) &&
                        path.node.callee.object.name === 'NextResponse' &&
                        t.isIdentifier(path.node.callee.property) &&
                        path.node.callee.property.name === 'json') {
                        // Check if it has an error status argument
                        if (path.node.arguments.length >= 2) {
                            const statusArg = path.node.arguments[1];
                            if (t.isObjectExpression(statusArg)) {
                                // Check if it has a 'status' property
                                for (const prop of statusArg.properties) {
                                    if (t.isObjectProperty(prop) &&
                                        t.isIdentifier(prop.key) &&
                                        prop.key.name === 'status' &&
                                        t.isNumericLiteral(prop.value) &&
                                        !(0, isHttpStatusValid_1.isHttpStatusValid)(prop.value.value)) {
                                        const value = content.substring(path.node.start, path.node.end);
                                        currentHandler.doc.errors.push({ value, line: currentLineNumber });
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    });
    if (currentHandler) {
        handlers.push(currentHandler);
    }
    return handlers;
}
exports.parseRouteHandlers = parseRouteHandlers;
//# sourceMappingURL=parser.js.map