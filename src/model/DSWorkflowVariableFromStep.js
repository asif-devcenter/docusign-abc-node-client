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
import DSWorkflowVariableSourceTypesStep from './DSWorkflowVariableSourceTypesStep';

/**
 * The DSWorkflowVariableFromStep model module.
 * @module model/DSWorkflowVariableFromStep
 * @version 1.0.0
 */
class DSWorkflowVariableFromStep {
    /**
     * Constructs a new <code>DSWorkflowVariableFromStep</code>.
     * DS Workflow Variable from a Step
     * @alias module:model/DSWorkflowVariableFromStep
     * @param source {module:model/DSWorkflowVariableSourceTypesStep} 
     * @param key {String} 
     * @param propertyName {String} 
     * @param stepId {String} 
     */
    constructor(source, key, propertyName, stepId) { 
        
        DSWorkflowVariableFromStep.initialize(this, source, key, propertyName, stepId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, key, propertyName, stepId) { 
        obj['source'] = source;
        obj['key'] = key;
        obj['propertyName'] = propertyName;
        obj['stepId'] = stepId;
    }

    /**
     * Constructs a <code>DSWorkflowVariableFromStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowVariableFromStep} obj Optional instance to populate.
     * @return {module:model/DSWorkflowVariableFromStep} The populated <code>DSWorkflowVariableFromStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowVariableFromStep();

            if (data.hasOwnProperty('source')) {
                obj['source'] = DSWorkflowVariableSourceTypesStep.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('propertyName')) {
                obj['propertyName'] = ApiClient.convertToType(data['propertyName'], 'String');
            }
            if (data.hasOwnProperty('stepId')) {
                obj['stepId'] = ApiClient.convertToType(data['stepId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowVariableFromStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowVariableFromStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowVariableFromStep.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['propertyName'] && !(typeof data['propertyName'] === 'string' || data['propertyName'] instanceof String)) {
            throw new Error("Expected the field `propertyName` to be a primitive type in the JSON string but got " + data['propertyName']);
        }
        // ensure the json data is a string
        if (data['stepId'] && !(typeof data['stepId'] === 'string' || data['stepId'] instanceof String)) {
            throw new Error("Expected the field `stepId` to be a primitive type in the JSON string but got " + data['stepId']);
        }

        return true;
    }


}

DSWorkflowVariableFromStep.RequiredProperties = ["source", "key", "propertyName", "stepId"];

/**
 * @member {module:model/DSWorkflowVariableSourceTypesStep} source
 */
DSWorkflowVariableFromStep.prototype['source'] = undefined;

/**
 * @member {String} key
 */
DSWorkflowVariableFromStep.prototype['key'] = undefined;

/**
 * @member {String} propertyName
 */
DSWorkflowVariableFromStep.prototype['propertyName'] = undefined;

/**
 * @member {String} stepId
 */
DSWorkflowVariableFromStep.prototype['stepId'] = undefined;






export default DSWorkflowVariableFromStep;
