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
import DSWorkflowComparisonExpression from './DSWorkflowComparisonExpression';
import DSWorkflowStep from './DSWorkflowStep';
import DSWorkflowStepTypesDoUntil from './DSWorkflowStepTypesDoUntil';

/**
 * The DSDoUntilStep model module.
 * @module model/DSDoUntilStep
 * @version 1.0.0
 */
class DSDoUntilStep {
    /**
     * Constructs a new <code>DSDoUntilStep</code>.
     * @alias module:model/DSDoUntilStep
     * @param name {String} 
     * @param id {String} 
     * @param type {module:model/DSWorkflowStepTypesDoUntil} 
     * @param doSteps {Array.<module:model/DSWorkflowStep>} 
     * @param expression {module:model/DSWorkflowComparisonExpression} 
     */
    constructor(name, id, type, doSteps, expression) { 
        
        DSDoUntilStep.initialize(this, name, id, type, doSteps, expression);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, type, doSteps, expression) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['type'] = type;
        obj['doSteps'] = doSteps;
        obj['expression'] = expression;
    }

    /**
     * Constructs a <code>DSDoUntilStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSDoUntilStep} obj Optional instance to populate.
     * @return {module:model/DSDoUntilStep} The populated <code>DSDoUntilStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSDoUntilStep();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowStepTypesDoUntil.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('doSteps')) {
                obj['doSteps'] = ApiClient.convertToType(data['doSteps'], [DSWorkflowStep]);
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = DSWorkflowComparisonExpression.constructFromObject(data['expression']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSDoUntilStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSDoUntilStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSDoUntilStep.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['doSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['doSteps'])) {
                throw new Error("Expected the field `doSteps` to be an array in the JSON data but got " + data['doSteps']);
            }
            // validate the optional field `doSteps` (array)
            for (const item of data['doSteps']) {
                DSWorkflowStep.validateJSON(item);
            };
        }
        // validate the optional field `expression`
        if (data['expression']) { // data not null
          DSWorkflowComparisonExpression.validateJSON(data['expression']);
        }

        return true;
    }


}

DSDoUntilStep.RequiredProperties = ["name", "id", "type", "doSteps", "expression"];

/**
 * @member {String} name
 */
DSDoUntilStep.prototype['name'] = undefined;

/**
 * @member {String} id
 */
DSDoUntilStep.prototype['id'] = undefined;

/**
 * @member {module:model/DSWorkflowStepTypesDoUntil} type
 */
DSDoUntilStep.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowStep>} doSteps
 */
DSDoUntilStep.prototype['doSteps'] = undefined;

/**
 * @member {module:model/DSWorkflowComparisonExpression} expression
 */
DSDoUntilStep.prototype['expression'] = undefined;






export default DSDoUntilStep;

