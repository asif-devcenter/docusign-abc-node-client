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
import DSWorkflowTriggerTypes from './DSWorkflowTriggerTypes';
import DSWorkflowVariable from './DSWorkflowVariable';
import EventTypes from './EventTypes';
import HttpTypes from './HttpTypes';

/**
 * The DSWorkflowTrigger model module.
 * @module model/DSWorkflowTrigger
 * @version 1.0.0
 */
class DSWorkflowTrigger {
    /**
     * Constructs a new <code>DSWorkflowTrigger</code>.
     * A DS workflow trigger.
     * @alias module:model/DSWorkflowTrigger
     * @param name {String} 
     * @param id {String} 
     * @param type {module:model/DSWorkflowTriggerTypes} 
     * @param httpType {module:model/HttpTypes} 
     * @param input {Object.<String, module:model/DSWorkflowVariable>} A DS Workflow variable record
     * @param output {Object.<String, module:model/DSWorkflowVariable>} A DS Workflow variable record
     */
    constructor(name, id, type, httpType, input, output) { 
        
        DSWorkflowTrigger.initialize(this, name, id, type, httpType, input, output);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id, type, httpType, input, output) { 
        obj['name'] = name;
        obj['id'] = id;
        obj['type'] = type;
        obj['httpType'] = httpType;
        obj['input'] = input;
        obj['output'] = output;
    }

    /**
     * Constructs a <code>DSWorkflowTrigger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowTrigger} obj Optional instance to populate.
     * @return {module:model/DSWorkflowTrigger} The populated <code>DSWorkflowTrigger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowTrigger();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DSWorkflowTriggerTypes.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('eventType')) {
                obj['eventType'] = EventTypes.constructFromObject(data['eventType']);
            }
            if (data.hasOwnProperty('httpType')) {
                obj['httpType'] = HttpTypes.constructFromObject(data['httpType']);
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ApiClient.convertToType(data['input'], {'String': DSWorkflowVariable});
            }
            if (data.hasOwnProperty('output')) {
                obj['output'] = ApiClient.convertToType(data['output'], {'String': DSWorkflowVariable});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowTrigger</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowTrigger</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowTrigger.RequiredProperties) {
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

        return true;
    }


}

DSWorkflowTrigger.RequiredProperties = ["name", "id", "type", "httpType", "input", "output"];

/**
 * @member {String} name
 */
DSWorkflowTrigger.prototype['name'] = undefined;

/**
 * @member {String} id
 */
DSWorkflowTrigger.prototype['id'] = undefined;

/**
 * @member {module:model/DSWorkflowTriggerTypes} type
 */
DSWorkflowTrigger.prototype['type'] = undefined;

/**
 * @member {module:model/EventTypes} eventType
 */
DSWorkflowTrigger.prototype['eventType'] = undefined;

/**
 * @member {module:model/HttpTypes} httpType
 */
DSWorkflowTrigger.prototype['httpType'] = undefined;

/**
 * A DS Workflow variable record
 * @member {Object.<String, module:model/DSWorkflowVariable>} input
 */
DSWorkflowTrigger.prototype['input'] = undefined;

/**
 * A DS Workflow variable record
 * @member {Object.<String, module:model/DSWorkflowVariable>} output
 */
DSWorkflowTrigger.prototype['output'] = undefined;






export default DSWorkflowTrigger;

