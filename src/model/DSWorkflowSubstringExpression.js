/**
 * Workflows APIs
 * Workflows authors and executes experiences that allow non-coders the ability to define Simple Business Process without having to write code and to deploy them seamlessly without having to have development expertise
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: aow@docusign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DSWorkflowTransformationExpressionTypesSubstringExpression from './DSWorkflowTransformationExpressionTypesSubstringExpression';
import NumberOrVariable from './NumberOrVariable';
import StringOrVariableOrTransformation from './StringOrVariableOrTransformation';

/**
 * The DSWorkflowSubstringExpression model module.
 * @module model/DSWorkflowSubstringExpression
 * @version 1.0.0
 */
class DSWorkflowSubstringExpression {
    /**
     * Constructs a new <code>DSWorkflowSubstringExpression</code>.
     * @alias module:model/DSWorkflowSubstringExpression
     * @param type {module:model/DSWorkflowTransformationExpressionTypesSubstringExpression} 
     * @param text {module:model/StringOrVariableOrTransformation} 
     * @param startIndex {module:model/NumberOrVariable} 
     */
    constructor(type, text, startIndex) { 
        
        DSWorkflowSubstringExpression.initialize(this, type, text, startIndex);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text, startIndex) { 
        obj['type'] = type;
        obj['text'] = text;
        obj['startIndex'] = startIndex;
    }

    /**
     * Constructs a <code>DSWorkflowSubstringExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowSubstringExpression} obj Optional instance to populate.
     * @return {module:model/DSWorkflowSubstringExpression} The populated <code>DSWorkflowSubstringExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowSubstringExpression();

            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowTransformationExpressionTypesSubstringExpression.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = StringOrVariableOrTransformation.constructFromObject(data['text']);
            }
            if (data.hasOwnProperty('startIndex')) {
                obj['startIndex'] = NumberOrVariable.constructFromObject(data['startIndex']);
            }
            if (data.hasOwnProperty('length')) {
                obj['length'] = NumberOrVariable.constructFromObject(data['length']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowSubstringExpression</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowSubstringExpression</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowSubstringExpression.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `text`
        if (data['text']) { // data not null
          StringOrVariableOrTransformation.validateJSON(data['text']);
        }
        // validate the optional field `startIndex`
        if (data['startIndex']) { // data not null
          NumberOrVariable.validateJSON(data['startIndex']);
        }
        // validate the optional field `length`
        if (data['length']) { // data not null
          NumberOrVariable.validateJSON(data['length']);
        }

        return true;
    }


}

DSWorkflowSubstringExpression.RequiredProperties = ["type", "text", "startIndex"];

/**
 * @member {module:model/DSWorkflowTransformationExpressionTypesSubstringExpression} type
 */
DSWorkflowSubstringExpression.prototype['type'] = undefined;

/**
 * @member {module:model/StringOrVariableOrTransformation} text
 */
DSWorkflowSubstringExpression.prototype['text'] = undefined;

/**
 * @member {module:model/NumberOrVariable} startIndex
 */
DSWorkflowSubstringExpression.prototype['startIndex'] = undefined;

/**
 * @member {module:model/NumberOrVariable} length
 */
DSWorkflowSubstringExpression.prototype['length'] = undefined;






export default DSWorkflowSubstringExpression;

