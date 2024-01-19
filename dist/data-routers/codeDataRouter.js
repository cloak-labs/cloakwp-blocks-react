"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeDataRouter = void 0;
const codeDataRouter = (options = {}) => (block) => {
    // const { classes, styles } = wpBlockStyleBuilder(block);
    const { content } = block.attrs ?? {};
    let { language, code } = extractLanguage(content);
    const langAliases = {
        js: "javascript",
    };
    if (Object.keys(langAliases).includes(language))
        language = langAliases[language];
    let props = {
        ...options,
        children: code,
    };
    if (language)
        props.language = language;
    return props;
};
exports.codeDataRouter = codeDataRouter;
function extractLanguage(inputString) {
    // Check if the inputString contains "@lang="
    const langIndex = inputString.indexOf("@lang=");
    if (langIndex !== -1) {
        // Find the end of the value starting from langIndex
        const endIndex = inputString.indexOf(" ", langIndex);
        if (endIndex !== -1) {
            // Extract the value between "@lang=" and the next space
            const language = inputString.substring(langIndex + 6, endIndex);
            // Remove the "@lang=value " portion from the input string
            const code = inputString.slice(0, langIndex) + inputString.slice(endIndex + 1);
            return {
                language: language,
                code: code.trim(), // Trim any leading/trailing spaces
            };
        }
        else {
            // If no space is found, extract until the end of the string
            const language = inputString.substring(langIndex + 6);
            // Remove "@lang=value" from the end of the string
            const code = inputString.slice(0, langIndex).trim();
            return {
                language: language,
                code: code,
            };
        }
    }
    // If "@lang=" is not found in the string, return null for language
    return {
        language: null,
        code: inputString,
        style: "night-owl",
    };
}
