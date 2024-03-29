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
import DSWorkflowBooleanExpression from './DSWorkflowBooleanExpression';
import DSWorkflowStep from './DSWorkflowStep';
import DSWorkflowStepTypesDSIfElse from './DSWorkflowStepTypesDSIfElse';

/**
 * The DSIfElseStep model module.
 * @module model/DSIfElseStep
 * @version 1.0.0
 */
class DSIfElseStep {
    /**
     * Constructs a new <code>DSIfElseStep</code>.
     * @alias module:model/DSIfElseStep
     * @param name {String} 
     * @param id {String} 
     * @param type {module:model/DSWorkflowStepTypesDSIfElse} 
     * @param ifSteps {Array.<module:model/DSWorkflowStep>} 
     * @param elseSteps {Array.<module:model/DSWorkflowStep>} 
     * @param expression {module:model/DSWorkflowBooleanExpression} 
     */
    constructor(name, id, type, ifSteps, elseSteps, expression) { 
        
        DSIfElseStep.initialize(this, name, id, type, ifSteps, elseSteps, expression);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, type, ifSteps, elseSteps, expression) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['type'] = type;
        obj['ifSteps'] = ifSteps;
        obj['elseSteps'] = elseSteps;
        obj['expression'] = expression;
    }

    /**
     * Constructs a <code>DSIfElseStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSIfElseStep} obj Optional instance to populate.
     * @return {module:model/DSIfElseStep} The populated <code>DSIfElseStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSIfElseStep();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowStepTypesDSIfElse.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('ifSteps')) {
                obj['ifSteps'] = ApiClient.convertToType(data['ifSteps'], [DSWorkflowStep]);
            }
            if (data.hasOwnProperty('elseSteps')) {
                obj['elseSteps'] = ApiClient.convertToType(data['elseSteps'], [DSWorkflowStep]);
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = DSWorkflowBooleanExpression.constructFromObject(data['expression']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSIfElseStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSIfElseStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSIfElseStep.RequiredProperties) {
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
        if (data['ifSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ifSteps'])) {
                throw new Error("Expected the field `ifSteps` to be an array in the JSON data but got " + data['ifSteps']);
            }
            // validate the optional field `ifSteps` (array)
            for (const item of data['ifSteps']) {
                DSWorkflowStep.validateJSON(item);
            };
        }
        if (data['elseSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['elseSteps'])) {
                throw new Error("Expected the field `elseSteps` to be an array in the JSON data but got " + data['elseSteps']);
            }
            // validate the optional field `elseSteps` (array)
            for (const item of data['elseSteps']) {
                DSWorkflowStep.validateJSON(item);
            };
        }
        // validate the optional field `expression`
        if (data['expression']) { // data not null
          DSWorkflowBooleanExpression.validateJSON(data['expression']);
        }

        return true;
    }


}

DSIfElseStep.RequiredProperties = ["name", "id", "type", "ifSteps", "elseSteps", "expression"];

/**
 * @member {String} name
 */
DSIfElseStep.prototype['name'] = undefined;

/**
 * @member {String} id
 */
DSIfElseStep.prototype['id'] = undefined;

/**
 * @member {module:model/DSWorkflowStepTypesDSIfElse} type
 */
DSIfElseStep.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowStep>} ifSteps
 */
DSIfElseStep.prototype['ifSteps'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowStep>} elseSteps
 */
DSIfElseStep.prototype['elseSteps'] = undefined;

/**
 * @member {module:model/DSWorkflowBooleanExpression} expression
 */
DSIfElseStep.prototype['expression'] = undefined;






export default DSIfElseStep;

