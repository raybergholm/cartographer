export const OPERATORS = {
    Equals: "==",
    NotEquals: "!=",
    In: "=in=",
    Like: "=like="
};

export const SEPARATORS = {
    And: ";",
    Or: ":"
};


export const buildFIQLString = (fields, separator) => fields.entries().reduce((accumulator, { fieldName, value }) => {

}).join(separator);

const combineFields = (fieldMap, joinType) => {

};
