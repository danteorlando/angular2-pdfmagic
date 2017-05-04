"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var forms = [
            { id: 11, name: '1040', fileName: 'f1040.pdf', fields: [{ fieldType: 'Text', fieldName: 'FieldA1' }, { fieldType: 'Text', fieldName: 'FieldA2' }] },
            { id: 12, name: '1040-EZ', fileName: 'f1040ez.pdf', fields: [{ fieldType: 'Text', fieldName: 'FieldB1' }, { fieldType: 'Text', fieldName: 'FieldB2' }] },
            { id: 13, name: 'W-2', fileName: 'fw2.pdf', fields: [{ fieldType: 'Text', fieldName: 'FieldC1' }, { fieldType: 'Text', fieldName: 'FieldC2' }] },
            { id: 14, name: 'W-4', fileName: 'fw4.pdf', fields: [{ fieldType: 'Text', fieldName: 'FieldD1' }, { fieldType: 'Text', fieldName: 'FieldD2' }] }
        ];
        return { forms: forms };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map