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
import DSSignStepInput from './DSSignStepInput';
import DSWorkflowStepTypesDSSign from './DSWorkflowStepTypesDSSign';
import StringOrVariableOrTransformation from './StringOrVariableOrTransformation';

/**
 * The DSSignStep model module.
 * @module model/DSSignStep
 * @version 1.0.0
 */
class DSSignStep {
    /**
     * Constructs a new <code>DSSignStep</code>.
     * @alias module:model/DSSignStep
     * @param name {String} 
     * @param id {String} 
     * @param type {module:model/DSWorkflowStepTypesDSSign} 
     * @param config {Object} 
     * @param input {module:model/DSSignStepInput} 
     * @param output {Object.<String, module:model/StringOrVariableOrTransformation>} A Record of strings to Strings, Variables, or Transformation Expressions
     */
    constructor(name, id, type, config, input, output) { 
        
        DSSignStep.initialize(this, name, id, type, config, input, output);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, type, config, input, output) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['type'] = type;
        obj['config'] = config;
        obj['input'] = input;
        obj['output'] = output;
    }

    /**
     * Constructs a <code>DSSignStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSSignStep} obj Optional instance to populate.
     * @return {module:model/DSSignStep} The populated <code>DSSignStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSSignStep();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowStepTypesDSSign.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], Object);
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = DSSignStepInput.constructFromObject(data['input']);
            }
            if (data.hasOwnProperty('output')) {
                obj['output'] = ApiClient.convertToType(data['output'], {'String': StringOrVariableOrTransformation});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSSignStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSSignStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSSignStep.RequiredProperties) {
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
        // validate the optional field `input`
        if (data['input']) { // data not null
          DSSignStepInput.validateJSON(data['input']);
        }

        return true;
    }


}

DSSignStep.RequiredProperties = ["name", "id", "type", "config", "input", "output"];

/**
 * @member {String} name
 */
DSSignStep.prototype['name'] = undefined;

/**
 * @member {String} id
 */
DSSignStep.prototype['id'] = undefined;

/**
 * @member {module:model/DSWorkflowStepTypesDSSign} type
 */
DSSignStep.prototype['type'] = undefined;

/**
 * @member {Object} config
 */
DSSignStep.prototype['config'] = undefined;

/**
 * @member {module:model/DSSignStepInput} input
 */
DSSignStep.prototype['input'] = undefined;

/**
 * A Record of strings to Strings, Variables, or Transformation Expressions
 * @member {Object.<String, module:model/StringOrVariableOrTransformation>} output
 */
DSSignStep.prototype['output'] = undefined;






export default DSSignStep;

