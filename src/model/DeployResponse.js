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

/**
 * The DeployResponse model module.
 * @module model/DeployResponse
 * @version 1.0.0
 */
class DeployResponse {
    /**
     * Constructs a new <code>DeployResponse</code>.
     * @alias module:model/DeployResponse
     * @param message {String} 
     * @param pollUrl {String} 
     */
    constructor(message, pollUrl) { 
        
        DeployResponse.initialize(this, message, pollUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, pollUrl) { 
        obj['message'] = message;
        obj['pollUrl'] = pollUrl;
    }

    /**
     * Constructs a <code>DeployResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployResponse} obj Optional instance to populate.
     * @return {module:model/DeployResponse} The populated <code>DeployResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployResponse();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('pollUrl')) {
                obj['pollUrl'] = ApiClient.convertToType(data['pollUrl'], 'String');
            }
            if (data.hasOwnProperty('receivedTime')) {
                obj['receivedTime'] = ApiClient.convertToType(data['receivedTime'], 'Date');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeployResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeployResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeployResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['pollUrl'] && !(typeof data['pollUrl'] === 'string' || data['pollUrl'] instanceof String)) {
            throw new Error("Expected the field `pollUrl` to be a primitive type in the JSON string but got " + data['pollUrl']);
        }
        // ensure the json data is a string
        if (data['method'] && !(typeof data['method'] === 'string' || data['method'] instanceof String)) {
            throw new Error("Expected the field `method` to be a primitive type in the JSON string but got " + data['method']);
        }

        return true;
    }


}

DeployResponse.RequiredProperties = ["message", "pollUrl"];

/**
 * @member {String} message
 */
DeployResponse.prototype['message'] = undefined;

/**
 * @member {String} pollUrl
 */
DeployResponse.prototype['pollUrl'] = undefined;

/**
 * @member {Date} receivedTime
 */
DeployResponse.prototype['receivedTime'] = undefined;

/**
 * @member {String} method
 */
DeployResponse.prototype['method'] = undefined;






export default DeployResponse;

