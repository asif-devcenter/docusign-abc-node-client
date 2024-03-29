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
 * The GetVersion200Response model module.
 * @module model/GetVersion200Response
 * @version 1.0.0
 */
class GetVersion200Response {
    /**
     * Constructs a new <code>GetVersion200Response</code>.
     * @alias module:model/GetVersion200Response
     */
    constructor() { 
        
        GetVersion200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetVersion200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetVersion200Response} obj Optional instance to populate.
     * @return {module:model/GetVersion200Response} The populated <code>GetVersion200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetVersion200Response();

            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('nodeVersion')) {
                obj['nodeVersion'] = ApiClient.convertToType(data['nodeVersion'], 'String');
            }
            if (data.hasOwnProperty('buildNumber')) {
                obj['buildNumber'] = ApiClient.convertToType(data['buildNumber'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('gitSha')) {
                obj['gitSha'] = ApiClient.convertToType(data['gitSha'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetVersion200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetVersion200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['environment'] && !(typeof data['environment'] === 'string' || data['environment'] instanceof String)) {
            throw new Error("Expected the field `environment` to be a primitive type in the JSON string but got " + data['environment']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['nodeVersion'] && !(typeof data['nodeVersion'] === 'string' || data['nodeVersion'] instanceof String)) {
            throw new Error("Expected the field `nodeVersion` to be a primitive type in the JSON string but got " + data['nodeVersion']);
        }
        // ensure the json data is a string
        if (data['buildNumber'] && !(typeof data['buildNumber'] === 'string' || data['buildNumber'] instanceof String)) {
            throw new Error("Expected the field `buildNumber` to be a primitive type in the JSON string but got " + data['buildNumber']);
        }
        // ensure the json data is a string
        if (data['branch'] && !(typeof data['branch'] === 'string' || data['branch'] instanceof String)) {
            throw new Error("Expected the field `branch` to be a primitive type in the JSON string but got " + data['branch']);
        }
        // ensure the json data is a string
        if (data['gitSha'] && !(typeof data['gitSha'] === 'string' || data['gitSha'] instanceof String)) {
            throw new Error("Expected the field `gitSha` to be a primitive type in the JSON string but got " + data['gitSha']);
        }

        return true;
    }


}



/**
 * Node environment.
 * @member {String} environment
 */
GetVersion200Response.prototype['environment'] = undefined;

/**
 * Server version.
 * @member {String} version
 */
GetVersion200Response.prototype['version'] = undefined;

/**
 * Node version.
 * @member {String} nodeVersion
 */
GetVersion200Response.prototype['nodeVersion'] = undefined;

/**
 * Build id.
 * @member {String} buildNumber
 */
GetVersion200Response.prototype['buildNumber'] = undefined;

/**
 * Git branch.
 * @member {String} branch
 */
GetVersion200Response.prototype['branch'] = undefined;

/**
 * Git commit SHA-1.
 * @member {String} gitSha
 */
GetVersion200Response.prototype['gitSha'] = undefined;






export default GetVersion200Response;

