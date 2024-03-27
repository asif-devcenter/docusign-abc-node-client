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
import WorkflowStepErrorError from './WorkflowStepErrorError';

/**
 * The WorkflowStepError model module.
 * @module model/WorkflowStepError
 * @version 1.0.0
 */
class WorkflowStepError {
    /**
     * Constructs a new <code>WorkflowStepError</code>.
     * Workflow Step History Error
     * @alias module:model/WorkflowStepError
     */
    constructor() { 
        
        WorkflowStepError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowStepError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStepError} obj Optional instance to populate.
     * @return {module:model/WorkflowStepError} The populated <code>WorkflowStepError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowStepError();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = WorkflowStepErrorError.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowStepError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowStepError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          WorkflowStepErrorError.validateJSON(data['error']);
        }

        return true;
    }


}



/**
 * The workflow step name where the error occurred
 * @member {String} name
 */
WorkflowStepError.prototype['name'] = undefined;

/**
 * @member {Date} startTime
 */
WorkflowStepError.prototype['startTime'] = undefined;

/**
 * @member {Date} endTime
 */
WorkflowStepError.prototype['endTime'] = undefined;

/**
 * Error code message
 * @member {String} code
 */
WorkflowStepError.prototype['code'] = undefined;

/**
 * @member {module:model/WorkflowStepErrorError} error
 */
WorkflowStepError.prototype['error'] = undefined;






export default WorkflowStepError;

