/// <reference types="react" />
import { SyntaxHighlighterOptions } from "@cloakui/react-primitives";
export declare const codeDataRouter: (options?: SyntaxHighlighterOptions) => (block: any) => {
    children: any;
    language?: "icon" | "abap" | "abnf" | "actionscript" | "ada" | "agda" | "al" | "antlr4" | "apacheconf" | "apex" | "apl" | "applescript" | "aql" | "arduino" | "arff" | "asciidoc" | "asm6502" | "asmatmel" | "aspnet" | "autohotkey" | "autoit" | "avisynth" | "avroIdl" | "bash" | "basic" | "batch" | "bbcode" | "bicep" | "birb" | "bison" | "bnf" | "brainfuck" | "brightscript" | "bro" | "bsl" | "c" | "cfscript" | "chaiscript" | "cil" | "clike" | "clojure" | "cmake" | "cobol" | "coffeescript" | "concurnas" | "coq" | "cpp" | "crystal" | "csharp" | "cshtml" | "csp" | "cssExtras" | "css" | "csv" | "cypher" | "d" | "dart" | "dataweave" | "dax" | "dhall" | "diff" | "django" | "dnsZoneFile" | "docker" | "dot" | "ebnf" | "editorconfig" | "eiffel" | "ejs" | "elixir" | "elm" | "erb" | "erlang" | "etlua" | "excelFormula" | "factor" | "falselang" | "firestoreSecurityRules" | "flow" | "fortran" | "fsharp" | "ftl" | "gap" | "gcode" | "gdscript" | "gedcom" | "gherkin" | "git" | "glsl" | "gml" | "gn" | "goModule" | "go" | "graphql" | "groovy" | "haml" | "handlebars" | "haskell" | "haxe" | "hcl" | "hlsl" | "hoon" | "hpkp" | "hsts" | "http" | "ichigojam" | "icuMessageFormat" | "idris" | "iecst" | "ignore" | "inform7" | "ini" | "io" | "j" | "java" | "javadoc" | "javadoclike" | "javascript" | "javastacktrace" | "jexl" | "jolie" | "jq" | "jsExtras" | "jsTemplates" | "jsdoc" | "json" | "json5" | "jsonp" | "jsstacktrace" | "jsx" | "julia" | "keepalived" | "keyman" | "kotlin" | "kumir" | "kusto" | "latex" | "latte" | "less" | "lilypond" | "liquid" | "lisp" | "livescript" | "llvm" | "log" | "lolcode" | "lua" | "magma" | "makefile" | "markdown" | "markupTemplating" | "markup" | "matlab" | "maxscript" | "mel" | "mermaid" | "mizar" | "mongodb" | "monkey" | "moonscript" | "n1ql" | "n4js" | "nand2tetrisHdl" | "naniscript" | "nasm" | "neon" | "nevod" | "nginx" | "nim" | "nix" | "nsis" | "objectivec" | "ocaml" | "opencl" | "openqasm" | "oz" | "parigp" | "parser" | "pascal" | "pascaligo" | "pcaxis" | "peoplecode" | "perl" | "phpExtras" | "php" | "phpdoc" | "plsql" | "powerquery" | "powershell" | "processing" | "prolog" | "promql" | "properties" | "protobuf" | "psl" | "pug" | "puppet" | "pure" | "purebasic" | "purescript" | "python" | "q" | "qml" | "qore" | "qsharp" | "r" | "racket" | "reason" | "regex" | "rego" | "renpy" | "rest" | "rip" | "roboconf" | "robotframework" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shellSession" | "smali" | "smalltalk" | "smarty" | "sml" | "solidity" | "solutionFile" | "soy" | "sparql" | "splunkSpl" | "sqf" | "sql" | "squirrel" | "stan" | "stylus" | "swift" | "systemd" | "t4Cs" | "t4Templating" | "t4Vb" | "tap" | "tcl" | "textile" | "toml" | "tremor" | "tsx" | "tt2" | "turtle" | "twig" | "typescript" | "typoscript" | "unrealscript" | "uorazor" | "uri" | "v" | "vala" | "vbnet" | "velocity" | "verilog" | "vhdl" | "vim" | "visualBasic" | "warpscript" | "wasm" | "webIdl" | "wiki" | "wolfram" | "wren" | "xeora" | "xmlDoc" | "xojo" | "xquery" | "yaml" | "yang" | "zig";
    style?: Record<string, any>;
    customStyle?: Record<string, any>;
    codeTagProps?: Record<string, any>;
    useInlineStyles?: boolean;
    showLineNumbers?: boolean;
    showInlineLineNumbers?: boolean;
    startingLineNumber?: number;
    lineNumberContainerStyle?: Record<string, any>;
    lineNumberStyle?: Record<string, any>;
    wrapLines?: boolean;
    wrapLongLines?: boolean;
    lineProps?: Record<string, any> | ((lineNumber: number) => Record<string, any>);
    renderer?: (options: Record<string, any>) => import("react").ReactNode;
    PreTag?: string | import("react").ComponentType<{}>;
    CodeTag?: string | import("react").ComponentType<{}>;
};
