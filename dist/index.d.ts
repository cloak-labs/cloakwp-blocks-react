/**
 * The following empty import, although weird & smelly, fixes a TS error (TS2742)
 * related to TS not being able to infer types from 'cloakwp', which is a "nested" dependency.
 * It allows TS to resolve types from `cloakwp`; note: the empty import doesn't affect bundle size
 * or runtime performance.
 */
export { configurableBlockPreset } from "./configurableBlockPreset";
