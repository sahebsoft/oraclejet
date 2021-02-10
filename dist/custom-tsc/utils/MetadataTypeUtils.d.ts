import * as ts from "typescript";
import * as MetaTypes from "./MetadataTypes";
import * as Metadata from "ojs/ojmetadata";
export declare function getGenericsAndTypeParameters(node: MetaTypes.HasTypeParameters, isPropsClass?: boolean): MetaTypes.GenericsTypes | undefined;
export declare function getUnionTypeNodeSignature(unionNode: ts.UnionTypeNode, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.ALL_TYPES;
export declare function getTypeReferenceNodeSignature(node: ts.TypeNode, isPropSignature: boolean, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.ALL_TYPES;
export declare function getTypeNameNoGenerics(node: ts.TypeReferenceNode): string | undefined;
export declare function getNodeDeclaration(node: ts.TypeNode, checker: ts.TypeChecker): any;
export declare function isGenericTypeParameter(symbol: ts.Symbol): boolean;
export declare function getPropertyType(propDeclaration: ts.PropertyDeclaration): string;
export declare function getComplexPropertyMetadata(memberSymbol: ts.Symbol, type: string, includeDtMetadata: boolean, stack: string[], metaUtilObj: MetaTypes.MetaUtilObj): Record<string, Metadata.ComponentMetadataProperties>;
export declare function getAllMetadataForDeclaration(declarationWithType: ts.HasType, includeDtMetadata: boolean, metaUtilObj: MetaTypes.MetaUtilObj): MetaTypes.ExtendedPropertiesMetadata | MetaTypes.ExtendedEventDetailsMetadata | MetaTypes.ExtendedSlotDataMetadata;
export declare function possibleComplexProperty(symbolType: ts.Type, type: string, checkForDt: boolean): boolean;
export declare function isClassDeclaration(symbolType: ts.Type): boolean;