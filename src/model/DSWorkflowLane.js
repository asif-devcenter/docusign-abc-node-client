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
import DSWorkflowStep from './DSWorkflowStep';

/**
 * The DSWorkflowLane model module.
 * @module model/DSWorkflowLane
 * @version 1.0.0
 */
class DSWorkflowLane {
    /**
     * Constructs a new <code>DSWorkflowLane</code>.
     * @alias module:model/DSWorkflowLane
     * @param laneId {String} 
     * @param laneSteps {Array.<module:model/DSWorkflowStep>} 
     */
    constructor(laneId, laneSteps) { 
        
        DSWorkflowLane.initialize(this, laneId, laneSteps);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, laneId, laneSteps) { 
        obj['laneId'] = laneId;
        obj['laneSteps'] = laneSteps;
    }

    /**
     * Constructs a <code>DSWorkflowLane</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DSWorkflowLane} obj Optional instance to populate.
     * @return {module:model/DSWorkflowLane} The populated <code>DSWorkflowLane</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DSWorkflowLane();

            if (data.hasOwnProperty('laneId')) {
                obj['laneId'] = ApiClient.convertToType(data['laneId'], 'String');
            }
            if (data.hasOwnProperty('laneSteps')) {
                obj['laneSteps'] = ApiClient.convertToType(data['laneSteps'], [DSWorkflowStep]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DSWorkflowLane</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DSWorkflowLane</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DSWorkflowLane.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['laneId'] && !(typeof data['laneId'] === 'string' || data['laneId'] instanceof String)) {
            throw new Error("Expected the field `laneId` to be a primitive type in the JSON string but got " + data['laneId']);
        }
        if (data['laneSteps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['laneSteps'])) {
                throw new Error("Expected the field `laneSteps` to be an array in the JSON data but got " + data['laneSteps']);
            }
            // validate the optional field `laneSteps` (array)
            for (const item of data['laneSteps']) {
                DSWorkflowStep.validateJSON(item);
            };
        }

        return true;
    }


}

DSWorkflowLane.RequiredProperties = ["laneId", "laneSteps"];

/**
 * @member {String} laneId
 */
DSWorkflowLane.prototype['laneId'] = undefined;

/**
 * @member {Array.<module:model/DSWorkflowStep>} laneSteps
 */
DSWorkflowLane.prototype['laneSteps'] = undefined;






export default DSWorkflowLane;

