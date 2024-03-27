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
import DSWorkflowTransformationExpressionTypesToLowerExpression from './DSWorkflowTransformationExpressionTypesToLowerExpression';
import StringOrVariableOrTransformation from './StringOrVariableOrTransformation';

/**
 * The DSWorkflowToLowerExpression model module.
 * @module model/DSWorkflowToLowerExpression
 * @version 1.0.0
 */
class DSWorkflowToLowerExpression {
    /**
     * Constructs a new <code>DSWorkflowToLowerExpression</code>.
     * @alias module:model/DSWorkflowToLowerExpression
     * @param type {module:model/DSWorkflowTransformationExpressionTypesToLowerExpression} 
     * @param text {module:model/StringOrVariableOrTransformation} 
     */
    constructor(type, text) { 
        
        DSWorkflowToLowerExpression.initialize(this, type, text);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, text) { 
        obj['type'] = type;
        obj['text'] = text;
    }

    /**
     * Constructs a <code>DSWorkflowToLowerExpression</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowToLowerExpression} obj Optional instance to populate.
     * @return {module:model/DSWorkflowToLowerExpression} The populated <code>DSWorkflowToLowerExpression</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowToLowerExpression();

            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowTransformationExpressionTypesToLowerExpression.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = StringOrVariableOrTransformation.constructFromObject(data['text']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowToLowerExpression</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowToLowerExpression</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowToLowerExpression.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `text`
        if (data['text']) { // data not null
          StringOrVariableOrTransformation.validateJSON(data['text']);
        }

        return true;
    }


}

DSWorkflowToLowerExpression.RequiredProperties = ["type", "text"];

/**
 * @member {module:model/DSWorkflowTransformationExpressionTypesToLowerExpression} type
 */
DSWorkflowToLowerExpression.prototype['type'] = undefined;

/**
 * @member {module:model/StringOrVariableOrTransformation} text
 */
DSWorkflowToLowerExpression.prototype['text'] = undefined;






export default DSWorkflowToLowerExpression;

