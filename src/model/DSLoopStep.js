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
import DSWorkflowStepTypesLoop from './DSWorkflowStepTypesLoop';

/**
 * The DSLoopStep model module.
 * @module model/DSLoopStep
 * @version 1.0.0
 */
class DSLoopStep {
    /**
     * Constructs a new <code>DSLoopStep</code>.
     * @alias module:model/DSLoopStep
     * @param name {String} 
     * @param id {String} 
     * @param type {module:model/DSWorkflowStepTypesLoop} 
     * @param loopSteps {Array.<module:model/DSWorkflowStep>} 
     * @param expression {module:model/DSWorkflowComparisonExpression} 
     */
    constructor(name, id, type, loopSteps, expression) { 
        
        DSLoopStep.initialize(this, name, id, type, loopSteps, expression);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, type, loopSteps, expression) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['type'] = type;
        obj['loopSteps'] = loopSteps;
        obj['expression'] = expression;
    }

    /**
     * Constructs a <code>DSLoopStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSLoopStep} obj Optional instance to populate.
     * @return {module:model/DSLoopStep} The populated <code>DSLoopStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSLoopStep();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowStepTypesLoop.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('loopSteps')) {
                obj['loopSteps'] = ApiClient.convertToType(data['loopSteps'], [DSWorkflowStep]);
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = DSWorkflowComparisonExpression.constructFromObject(data['expression']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSLoopStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSLoopStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSLoopStep.RequiredProperties) {
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
        if (data['loopSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['loopSteps'])) {
                throw new Error("Expected the field `loopSteps` to be an array in the JSON data but got " + data['loopSteps']);
            }
            // validate the optional field `loopSteps` (array)
            for (const item of data['loopSteps']) {
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

DSLoopStep.RequiredProperties = ["name", "id", "type", "loopSteps", "expression"];

/**
 * @member {String} name
 */
DSLoopStep.prototype['name'] = undefined;

/**
 * @member {String} id
 */
DSLoopStep.prototype['id'] = undefined;

/**
 * @member {module:model/DSWorkflowStepTypesLoop} type
 */
DSLoopStep.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowStep>} loopSteps
 */
DSLoopStep.prototype['loopSteps'] = undefined;

/**
 * @member {module:model/DSWorkflowComparisonExpression} expression
 */
DSLoopStep.prototype['expression'] = undefined;






export default DSLoopStep;

