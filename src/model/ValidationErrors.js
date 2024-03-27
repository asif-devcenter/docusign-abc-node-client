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
 * The ValidationErrors model module.
 * @module model/ValidationErrors
 * @version 1.0.0
 */
class ValidationErrors {
    /**
     * Constructs a new <code>ValidationErrors</code>.
     * @alias module:model/ValidationErrors
     * @param message {String} 
     * @param code {String} 
     */
    constructor(message, code) { 
        
        ValidationErrors.initialize(this, message, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message, code) { 
        obj['message'] = message;
        obj['code'] = code;
    }

    /**
     * Constructs a <code>ValidationErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationErrors} obj Optional instance to populate.
     * @return {module:model/ValidationErrors} The populated <code>ValidationErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationErrors();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidationErrors</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationErrors</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ValidationErrors.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }

        return true;
    }


}

ValidationErrors.RequiredProperties = ["message", "code"];

/**
 * @member {String} message
 */
ValidationErrors.prototype['message'] = undefined;

/**
 * @member {String} code
 */
ValidationErrors.prototype['code'] = undefined;






export default ValidationErrors;
